/*
https://www.hackerrank.com/challenges/draw-the-triangle-1/problem?isFullScreen=true

P(R) represents a pattern drawn by Julia in R rows. The following pattern represents P(5):

* * * * * 
* * * * 
* * * 
* * 
*

Write a query to print the pattern P(20).
*/

set @number = 21;
select repeat('* ', @number := @number - 1) 
from information_schema.tables
where @number > 0

/* 
draw the triangle 2
* 
* * 
* * *
* * * * 
* * * * *
*/

set @row=0;
select repeat("* ", @row := @row+1)
from information_schema.tables
where @row < 20;