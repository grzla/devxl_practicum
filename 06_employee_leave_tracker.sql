select e.email, l.days_taken
from leave_records l
join employees e 
on e.id = l.employee_id
where year(l.leave_dt) = 2023