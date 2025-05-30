/*
Query the sum of Northern Latitudes (LAT_N) from STATION having values greater than 38.7880 and less than 137.2345. Truncate your answer to 4 decimal places.

The STATION table is described as follows:
| Field | Type |
| ID | NUMBER |
| CITY | VARCHAR2(21) |
| STATE | VARCHAR2(2) |
| LAT_N | NUMBER |
| LONG_W | NUMBER |
*/

select truncate(sum(lat_n), 4)
from station
where lat_n between 38.7880 and 137.2345

