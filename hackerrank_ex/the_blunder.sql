/*
Samantha was tasked with calculating the average monthly salaries for all employees in the EMPLOYEES table, but did not realize her keyboard's 0 key was broken until after completing the calculation. She wants your help finding the difference between her miscalculation (using salaries with any zeros removed) and the actual average salary.
Write a query calculating the amount of error (i.e.: actual — miscalculated average monthly salaries), and round it up to the next integer.
Input Format
The EMPLOYEES table is described as follows:
| Column | Type |
|--------|--------|
| ID | Integer|
| Name | String |
| Salary | Integer|

1000 < Salary < 10^5
Note: Salary is per month.
*/

with actual as (
    select avg(salary) as actualavg
    from employees
),
miscalculated as (
    select avg(cast(replace(cast(salary as char), '0', '') as unsigned)) as miscalculatedavg
    from employees
)
select ceil(actual.actualavg - miscalculated.miscalculatedavg) as error
from actual, miscalculated;