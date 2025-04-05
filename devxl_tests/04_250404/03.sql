select 
    d.name,
    count(s.ID) as students
from department d 
left join student s 
    on d.id = s.dept_id
group by d.ID, d.name 
order by students desc, d.name asc;