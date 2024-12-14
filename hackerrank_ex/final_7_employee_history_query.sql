/* 
two tables contain people's names and their current and previous employers. find the company or companies that have the highest number of people that were previously employed there. for all of the people who work at one of those companies currently, list the person's name and the name of their previous employer. results should be in the form people.NAME companies.NAME. the order of the results is not important.
schema details:
PEOPLE table:
ID (STRING): id of the person
NAME (STRING): name of the person
DOJ (DATE): date of joining the current company
PREV_COMPANY_ID (STRING): id of the previous company
CURR_COMPANY_ID (STRING): id of the current company
COMPANIES table:
ID (STRING): id of the company
NAME (STRING): name of the company
 */
with prev_company_counts as (
    select prev_company_id
    from people
    where prev_company_id is not null
    group by prev_company_id
    having count(*) = (
        select count(*) 
        from people 
        where prev_company_id is not null 
        group by prev_company_id 
        order by count(*) desc 
        limit 1
    )
)

select 
    p.name as people_name,
    c.name as companies_name
from people p
join companies c on p.prev_company_id = c.id
where p.curr_company_id in (
    select prev_company_id 
    from prev_company_counts
)
