/*
Pivot the Occupation column in OCCUPATIONS so that each Name is sorted alphabetically and displayed underneath its corresponding Occupation. The output column headers should be Doctor, Professor, Singer, and Actor, respectively.
Note: Print NULL when there are no names corresponding to an occupation.
Input Format
The OCCUPATIONS table is described as follows:
| Column | Type |
|-------------|--------|
| Name | String |
| Occupation | String |
*/

SELECT 
    MAX(CASE WHEN Occupation = 'Doctor' THEN Name END) AS Doctor,
    MAX(CASE WHEN Occupation = 'Professor' THEN Name END) AS Professor,
    MAX(CASE WHEN Occupation = 'Singer' THEN Name END) AS Singer,
    MAX(CASE WHEN Occupation = 'Actor' THEN Name END) AS Actor
FROM 
    (SELECT Name, Occupation, 
            ROW_NUMBER() OVER (PARTITION BY Occupation ORDER BY Name) AS rn
     FROM OCCUPATIONS) AS sub
GROUP BY rn
ORDER BY rn;

/*
Explanation:
1. Subquery: The inner query assigns a row number (rn) to each name within its occupation, ordered alphabetically.
2. Pivoting: The outer query uses conditional aggregation to pivot the names under their respective occupations.
NULL Handling: If there are no names for a specific occupation, the result will automatically show NULL for that column.
*/
