/* 
MYSQL Query: AI Video Processing Service Cost Calculation
A video processing service in development uses AI to improve the quality of the input video. The service uses a process separation mechanism to improve performance and minimize overall execution time.
Since the price per second of an executed process is fixed and processes can be run in parallel, this significantly increases the load on the service as a whole. The decision was made to double the price for each process that runs in parallel with any other process.
Create a query that returns a list of all tasks and information about their processes.
The result should have the following columns: hash | processes | total_parallel_processes | total_usage_time | total_cost.
hash - task hash
processes - total number of all processes for a specific task
total_parallel_processes - total number of all processes for a specific task that are executed in parallel
total_usage_time - total execution time of all processes for a specific task
total_cost - total price of all processes for a specific task, rounded to two decimal places
The result should be sorted in ascending order by hash.
Note:
The price of each second of execution is 0.01.
The total cost of each process executed in parallel should be doubled.
Database Schema:
Table: tasks
| name | type | constraint | description |
|------|------|------------|-------------|
| id | INT | PRIMARY KEY | Task ID |
| hash | VARCHAR(255) | | Hash |
Table: processes
| name | type | constraint | description |
|------|------|------------|-------------|
| task_id | INT | FOREIGN KEY (task_id => tasks.id) | Task ID |
| start_dt | VARCHAR(19) | | Start timestamp |
| end_dt | VARCHAR(19) | | End timestamp | 
*/

WITH overlapping_processes AS (
    SELECT DISTINCT p1.task_id, p1.start_dt
    FROM processes p1
    INNER JOIN processes p2 ON 
        p1.task_id = p2.task_id AND
        p1.start_dt != p2.start_dt AND
        p1.start_dt < p2.end_dt AND
        p2.start_dt < p1.end_dt
),
process_details AS (
    SELECT 
        t.hash,
        p.task_id,
        p.start_dt,
        p.end_dt,
        -- A process is parallel if it exists in overlapping_processes
        CASE WHEN op.start_dt IS NOT NULL THEN 1 ELSE 0 END as is_parallel,
        TIMESTAMPDIFF(SECOND, p.start_dt, p.end_dt) as duration
    FROM processes p
    JOIN tasks t ON t.id = p.task_id
    LEFT JOIN overlapping_processes op ON 
        p.task_id = op.task_id AND 
        p.start_dt = op.start_dt
)
SELECT 
    hash,
    COUNT(*) as processes,
    SUM(is_parallel) as total_parallel_processes,
    SUM(duration) as total_usage_time,
    ROUND(
        SUM(
            CASE 
                WHEN is_parallel = 1 THEN duration * 0.02 -- Double cost for parallel processes
                ELSE duration * 0.01 -- Base cost for non-parallel processes
            END
        ),
        2
    ) as total_cost
FROM process_details
GROUP BY hash
ORDER BY hash ASC;
