/*
We define an employee's total earnings to be their monthly salary × months worked, and the maximum total earnings to be the maximum total earnings for any employee in the Employee table. Write a query to find the maximum total earnings for all employees as well as the total number of employees who have maximum total earnings. Then print these values as 2 space-separated integers.

| Column | Type |
| employee_id | Integer |
| name | String |
| months | Integer |
| salary | Integer |

total_earnings = salary * months
max
*/
select 
    max(total_earnings) as max_earnings,
    count(*) as count_max_earners
from (
    select salary * months as total_earnings
    from employee
) as earnings
where total_earnings = (select max(salary * months) from employee);