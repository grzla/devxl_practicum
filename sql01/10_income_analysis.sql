/*
You cannot use an alias (like avg_payment) defined in the SELECT clause directly in the WHERE clause. 
Instead, you need to use a HAVING clause for aggregations. 

After GROUP BY, you can use the HAVING clause to filter the results of the GROUP BY.

FROM: Determines the data source.
WHERE: Filters the rows before any aggregations occur.
GROUP BY: Groups the filtered rows for aggregation.
HAVING: Filters the grouped results (after aggregation).
SELECT: Projects the results and calculates any selected expressions, including aliases.
ORDER BY: Sorts the final result set.

*/
select 
    f.name,
    count(c.payment) as total_payments,
    min(c.payment) as min_payment,
    max(c.payment) as max_payment,
    round(avg(c.payment), 2) as avg_payment
from funds f
join coupon_payments c
    on f.id = c.fund_id
group by f.name
having avg(c.payment) > 500
order by f.name