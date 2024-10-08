select c.email, count(d.mac_address) as total_scanned_devices
from clients c
join devices d 
on c.id = d.client_id
where d.is_scanned = true
and month(d.scheduled_scan_dt) = 3
and year(d.scheduled_scan_dt) = 2024
group by c.email
order by c.email