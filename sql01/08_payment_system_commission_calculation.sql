select 
    cu.email, 
    co.name as country, 
    count(tr.customer_id) as transactions,
    sum(tr.amount) as total_amount,
    round(sum(tr.amount * co.commission), 2) as total_commission
from 
    customers cu
    join countries co on cu.country = co.name
    join transactions tr on cu.id = tr.customer_id
group BY cu.email, co.name, co.commission
order by cu.email