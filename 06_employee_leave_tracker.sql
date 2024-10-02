select e.email, 
    sum(l.days_taken) as leave_days_taken,
    case 
        when sum(l.days_taken) <= 20 then 'Within Limit'
        else 'Exceeded'
    end as leave_status
from leave_records l
join employees e 
on e.id = l.employee_id
where year(l.leave_dt) = 2023
group by e.email
order by e.email