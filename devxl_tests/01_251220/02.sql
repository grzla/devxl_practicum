/*
2. The First Orders

A company maintains information about its orders in the ORDERS table. Write a query to print details of the  earliest five orders (sorted by ORDER_DATE, ascending) that have not been delivered (i.e., STATUS is not DELIVERED). If there are more than five orders to choose from, select the ones with the lowest order ID. Sort the output in the increasing order of order ID. The output should contain ID, ORDER_DATE, STATUS, CUSTOMER_ID.

Schema:
Table: Orders
column name     column type
id              int
order_date      date
status          varchar(50)
customer_id     int

Sample Data:
ORDERS
ID      ORDER_DATE  STATUS      CUSTOMER_ID
10100   2003-01-06  PLACED      363
10101   2003-01-06  PLACED      128
10102   2003-01-06  IN TRANSIT  181
10103   2003-01-06  DELIVERED   121
10104   2003-01-07  DELIVERED   114
10106   2003-01-07  IN TRANSIT  278
10120   2003-01-07  PLACED      114
*/

from orders
where status != 'DELIVERED'
select *
order by order_date asc, id asc
limit 5

# i failed this one because i didn't understand the conditional "if there are more than five orders to choose from." what it means is that when there are multiple orders on the same date, we prefer the lower ids.
