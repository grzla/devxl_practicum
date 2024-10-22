/*
A shipping company control panel needs a query for the functionality of its warehouse module. It should return statistics on the packages grouped by status, either active or inactive.

The result should have the following columns: type | statuses | total_packages | total_weight.

status_group - package status group
statuses - comma-separated list of packages status group
total_packages - total number of all packages for a specific package status group
total_weight - total weight of all packages for a specific package status group

Note:
The active group contains packages with a status of created, shipped or on hold.
The inactive group contains packages with a status of delivered or cancelled.
The total weight is the sum of the weights of all packages in a group.


SCHEMA

customers
| name | type | constraint | description |
|-------|--------------|-----------------|------------------------------|
| id | INT | PRIMARY KEY | Customer ID |
| email | VARCHAR(255) | | Customer email address |

packages
| name | type | constraint | description |
|-------------|----------------------------------------|----------------------------------------------|----------------------|
| id | INT | PRIMARY KEY | Package ID |
| customer_id | INT | FOREIGN KEY (customer_id => customers.id) | Customer ID |
| status | ENUM('created','shipped','delivered','on hold','cancelled') | | Package status |
| weight | DECIMAL(5,2) | | Package weight |

*/

select 
    case 
        when status in ('created', 'shipped', 'on hold') then 'active'
        when status in ('delivered', 'cancelled') then 'inactive'
    end as type,
    group_concat(distinct status order by status) as statuses,
    count(*) as total_packages,
    sum(weight) as total_weight
from 
    packages
group by 
    type
;