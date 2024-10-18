/*
Generate the following two result sets:
Query an alphabetically ordered list of all names in OCCUPATIONS, immediately followed by the first letter of each profession as a parenthetical (i.e.: enclosed in parentheses). For example:
AnActorName(A), ADoctorName(D), AProfessorName(P), and ASingerName(S).
Query the number of occurrences of each occupation in OCCUPATIONS. Sort the occurrences in ascending order, and output them in the following format:
There are a total of [occupation_count] [occupation],
where [occupation_count] is the number of occurrences of an occupation in OCCUPATIONS and [occupation] is the lowercase occupation name. If more than one occupation has the same [occupation_count], they should be ordered alphabetically.
Note: There will be at least two entries in the table for each type of occupation.
*/

-- Query 1: Alphabetically ordered list of names
SELECT CONCAT(name, '(', LEFT(occupation, 1), ')') AS formatted_name
FROM OCCUPATIONS
ORDER BY formatted_name;

-- Query 2: Number of occurrences of each occupation
SELECT CONCAT('There are a total of ', COUNT(*), ' ', LOWER(occupation), 's.') AS occupation_summary
FROM OCCUPATIONS
GROUP BY occupation
ORDER BY COUNT(*) ASC, LOWER(occupation);
