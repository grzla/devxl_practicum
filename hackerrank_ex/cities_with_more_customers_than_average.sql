/* 
write a query which will return all cities with more customers than the average number of customers of all cities. For each such city, return the country name, the city name and the number of customers. Order the result by country name ascending.
*/


select 
    co.country_name, 
    ci.city_name, 
    count(cu.id) as number_of_customers
from 
    city ci
join 
    country co on ci.country_id = co.id

join 
    customer cu on ci.id = cu.city_id
group by 
    co.country_name, ci.city_name
having 
    count(cu.id) > (select avg(customer_count) 
                    from (select count(id) as customer_count 
                          from customer 
                          group by city_id) as avg_customers)
order by 
    co.country_name asc;
