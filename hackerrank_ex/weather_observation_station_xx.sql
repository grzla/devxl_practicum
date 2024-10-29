/* write a SQL query to find the median of Northern Latitudes (LAT_N) from the STATION table and round it to 4 decimal places. */

-- outer query: takes average of the middle value(s) and rounds to 4 decimal places
select round(avg(lat_n), 4)
from (
    -- inner query: creates a numbered list of latitudes
    select lat_n, 
           -- assigns sequential numbers to rows, ordered by latitude
           row_number() over (order by lat_n) as row_num,
           -- counts total number of rows in the table
           count(*) over () as total_rows
    from station
) ranked
-- selects the middle row(s)
where row_num in ((total_rows + 1)/2, (total_rows + 2)/2);