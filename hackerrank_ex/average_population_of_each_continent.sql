/* 
Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns. 

CITY table:
ID (NUMBER)
NAME (VARCHAR2(17))
COUNTRYCODE (VARCHAR2(3))
DISTRICT (VARCHAR2(20))
POPULATION (NUMBER)
COUNTRY table:
CODE (VARCHAR2(3))
NAME (VARCHAR2(44))

CONTINENT (VARCHAR2(13))
REGION (VARCHAR2(25))
SURFACEAREA (NUMBER)
INDEPYEAR (VARCHAR2(5))
POPULATION (NUMBER)
LIFEEXPECTANCY (VARCHAR2(4))
GNP (NUMBER)
GNPOLD (VARCHAR2(9))
LOCALNAME (VARCHAR2(44))
GOVERNMENTFORM (VARCHAR2(44))
HEADOFSTATE (VARCHAR2(32))
CAPITAL (VARCHAR2(4))
CODE2 (VARCHAR2(2))

*/

select country.continent, floor(avg(city.population)) as avg_city_population
from city 
join country on city.countrycode = country.code
group by country.continent;