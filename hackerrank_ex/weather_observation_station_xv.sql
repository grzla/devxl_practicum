/*
Query the Western Longitude (LONG_W) for the largest Northern Latitude (LAT_N) in STATION that is less than 137.2345. Round your answer to 4 decimal places.

The STATION table is described as follows:
| Field | Type |
| ID | NUMBER |
| CITY | VARCHAR2(21) |
| STATE | VARCHAR2(2) |
| LAT_N | NUMBER |
| LONG_W | NUMBER |
*/

select round(long_w, 4)
from station
where lat_n < 137.2345
order by lat_n desc
limit 1