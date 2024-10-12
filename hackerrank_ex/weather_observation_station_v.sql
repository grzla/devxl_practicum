/*
Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically. 
https://www.hackerrank.com/challenges/weather-observation-station-5/problem
*/
select city, length(city)
from station 
order by 
    length(city) asc, 
    city asc 
    limit 1;

select city, length(city)
from station 
order by 
    length(city) desc, 
    city asc 
    limit 1;

/* alternate, single query solution

select city, length(city) as name_length
from station 
where length(city) = (select length(city) from station order by length(city) asc limit 1)
union all
select city, length(city) as name_length
from station 
where length(city) = (select length(city) from station order by length(city) desc limit 1);
*/