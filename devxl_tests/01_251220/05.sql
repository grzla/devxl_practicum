/*
5. counting hackos

a coding platform maintains all the participating hackers' data in the HACKER table. write a query to print the names of
all the hackers who have earned more than 100 hackos in less than 10 months. print the output in the ascending order
of their ID.

input format:
table: HACKER
+--------+---------+------------------------------------------------------------------+
| name   | type    | description                                                      |
+--------+---------+------------------------------------------------------------------+
| ID     | Integer | a hacker ID in the inclusive range [1, 1000]. primary key.       |
| NAME   | String  | a hacker name. contains between 1 and 100 characters (inclusive). |
| MONTHS | Integer | the total number of months the hacker has been programming.       |
| HACKOS | Integer | the total number of points the hacker gained per month.          |
+--------+---------+------------------------------------------------------------------+

the names should be printed in the ascending order of their ID.

output format:
each row of results must contain the name of a hacker who has earned more than 100 hackos in less than 10 months,
in the following format:
HACKER.NAME

sample input:
table: HACKER
+----+-----------------+---------+--------+
| ID | NAME            | MONTHS  | HACKOS |
+----+-----------------+---------+--------+
| 1  | Frances White   | 5       | 20     |
| 2  | Carolyn Bradley | 2       | 10     |
| 3  | Annie Fernandez | 10      | 5      |
| 4  | Ruth Hanson     | 5       | 15     |
+----+-----------------+---------+--------+
*/
