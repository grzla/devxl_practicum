/*
4. SQL: Combining Successful and Failed Transactions Analysis
A financial technology service is conducting a comprehensive analysis of its transactions to identify areas for improvement. The company wants to generate a report that details both the successful and failed transactions, focusing on the volume and total amount involved. For failed transactions, the report must list all the reasons for failure.
The result should have the following columns: status | total_transactions | total_amount | failure_reasons.
status - the status of the transaction
total_transactions - the total number of transactions for a specific status
total_amount - the total amount of money involved in the transactions for a specific status, rounded to two decimal places, including trailing zeros if necessary (e.g., $5.00)
failure_reasons - the list of reasons for transaction failures, separated by commas, sorted first descending by number of occurrences, then ascending by reason
The result should be sorted in ascending order by status.
Note:
For transactions with a status of "success", set the failure reason to N/A.
For transactions with a status of "failure" but without a specified reason (null value), set the failure reason to Unknown.
▼ Schema
transactions
| Name | Type | Constraints | Description |
|------|------|-------------|-------------|
| id | INT | PRIMARY KEY | The identifier of the transaction |
| amount | DECIMAL(6,2) | | The amount of the transaction |
| status | ENUM('success','failure') | | The status of the transaction |
| failure_reason | VARCHAR(255) | | The reason for transaction failure |
*/
SELECT 
    status,
    COUNT(*) AS total_transactions,
    ROUND(SUM(amount), 2) AS total_amount,
    CASE 
        WHEN status = 'success' THEN 'N/A'
        ELSE (
            SELECT GROUP_CONCAT(reasons.reason ORDER BY reasons.count DESC, reasons.reason ASC SEPARATOR ', ')
            FROM (
                SELECT 
                    COALESCE(failure_reason, 'Unknown') AS reason,
                    COUNT(*) AS count
                FROM transactions
                WHERE status = 'failure' AND (failure_reason IS NOT NULL OR failure_reason IS NULL)
                GROUP BY COALESCE(failure_reason, 'Unknown')
                ORDER BY count DESC, reason ASC
            ) AS reasons
        )
    END AS failure_reasons
FROM 
    transactions
GROUP BY 
    status
ORDER BY 
    status ASC

/*
// I got as far as:
select 
    status, 
    count(*) as total_transactions,
    sum(amount) as total_amount, 
    failure_reason 
from transactions 
group by status
*/