/*

GROUP_CONCAT(expr 
            [ORDER BY {unsigned_integer | col_name | expr} ASC | DESC] 
            [SEPARATOR]
            
*/

select 
    a.iban,
    group_concat(
        t.amount
        order by t.dt asc 
        separator ' + '
    ) as transactions,
    concat('$', format(sum(cast(replace(t.amount, '$', '') as decimal(10, 2))), 2)) as total
from 
    accounts a
join 
    transactions t on a.id = t.account_id
where 
    month(t.dt) = 9
group by 
    a.iban
order by 
    count(t.amount) desc, 
    sum(cast(replace(t.amount, '$', '') as decimal(10, 2))) desc;