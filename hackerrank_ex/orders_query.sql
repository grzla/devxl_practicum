/* Company X has a record of its customers and their orders. Find the customer(s) with the highest order price for orders placed within 10 years of the first order (earliest order_date) in the database. Print the customer name and order price. If multiple records are returned, they can be in any order. 
*/

select 
    c.name, 
    o.price
from 
    customers c
join 
    orders o on c.order_id = o.id
where 
    o.order_date <= (select min(order_date) from orders) + interval 10 year
    and o.order_date >= (select min(order_date) from orders)
    and o.price = (select max(price) from orders where order_date <= (select min(order_date) from orders) + interval 10 year)
;