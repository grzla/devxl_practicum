/*
SQL Query Orders

A company maintains order information in an ORDERS table with the following schema:

Table: ORDERS
+-------------+-------------+
| Column Name | Type        |
+-------------+-------------+
| ID          | INTEGER     |
| CUSTOMER_ID | INTEGER     |
| TOTAL       | DECIMAL     |
| ORDER_DATE  | DATE        |
| STATUS      | VARCHAR(20) |
+-------------+-------------+

Write a query to retrieve the IDs and order dates of the 3 most recent orders that are not in 'DELIVERED' status. Order the results by the most recent order date first.
*/

-- Write your SQL query here
select id, order_date
from orders 
where status != 'DELIVERED'
order by order_date desc
limit 3 