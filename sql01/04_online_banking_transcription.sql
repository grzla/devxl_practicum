select 
    a.iban,
    count(*) as transactions,
    sum(t.amount) as total
from 
    accounts a
join 
    transactions t on a.id = t.account_id
where 
    month(t.dt) = 9
group by 
    a.iban
order by 
    total desc