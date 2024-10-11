/*
Was having an issue whereupon testing it was observed that each income record was being repeated for as many expense items. 

The issue arises because the `JOIN` operation between `expenses` and `income` tables results in a Cartesian product for each customer, leading to repeated rows. To avoid this, you should aggregate the `income` and `expenses` separately before joining them with the `customers` table.

*/
select 
    c.email,
    sum(i.total_income) - sum(e.total_expense) as balance
from 
    customers c
join 
    (select customer_id, sum(amount) as total_income from income group by customer_id) i 
    on c.id = i.customer_id
join 
    (select customer_id, sum(amount) as total_expense from expenses group by customer_id) e 
    on c.id = e.customer_id
group by 
    c.email, i.total_income, e.total_expense
having 
    i.total_income - e.total_expense < 0
order by 
    c.email