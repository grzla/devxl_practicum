/* 
SQL: Monthly Job Postings and Freelancer Registrations Report
A leading freelancer platform intends to generate a monthly report to analyze and compare the growth between new job postings and freelancer registrations.
The result should have the following columns: month_year | source | total_number.
month_year - month and year, presented in YYYY-MM format (e.g., "2022-01")
source - a record source, can be "Jobs" or "Freelancers"
total_number - the total number of job postings or freelancer registrations for a specific month, year and source
The result should be sorted in ascending order by month_year, then in ascending order by source.
Note:
Only job posts and freelancer registrations in 2022 should be included in the report.
Schema
jobs
| name | type | constraint | description |
|------|------|------------|-------------|
| title | VARCHAR(255) | | Title of the job (e.g., Web Developer) |
| dt | VARCHAR(19) | | Date when the job was made available on platform |
freelancers
| name | type | constraint | description |
|------|------|------------|-------------|
| full_name | VARCHAR(255) | | Full name of the freelancer |
| dt | VARCHAR(19) | | Date when the freelancer registered on the platform |
 
 */
-- get job postings counts by month
with job_counts as (
    select 
        DATE_FORMAT(dt, '%Y-%m') as month_year,
        'Jobs' as source,
        count(*) as total_number
    from jobs
    where YEAR(dt) = 2022
    group by month_year
),

-- get freelancer registration counts by month
freelancer_counts as (
    select 
        DATE_FORMAT(dt, '%Y-%m') as month_year,
        'Freelancers' as source,
        count(*) as total_number
    from freelancers
    where YEAR(dt) = 2022
    group by month_year
)

-- combine and sort results
select *
from (
    select * from job_counts
    union all
    select * from freelancer_counts
) as combined_data
order by month_year, source
