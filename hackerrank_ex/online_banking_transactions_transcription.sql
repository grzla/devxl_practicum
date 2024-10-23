/*
A client requested a query for a dashboard in their online banking web service. It should return a list of all customer accounts and their transactions for the current month.

The result should have the following columns: iban | transactions | total.

iban - account IBAN

transactions - list of transaction amount records for a specific account IBAN:

    Record is a transaction amount with its currency symbol and two places after the decimal, e.g., $10 shows as $10.00.
    Records are separated by a + sign.
    Records are sorted in ascending order of dt.

total - total amount of transactions with its currency symbol and two places after the decimal, e.g., $10 shows as $10.00.

The result should be sorted in descending order by total number of transactions, then in descending order by total.

Note:
Only transactions in the current month should be included in the result.


The current month is September.
*/

select 
    a.iban,
    group_concat(
        t.amount
        order by t.dt asc 
        separator ' + '
    ) as transactions,
    concat('$', sum(cast(replace(t.amount, '$', '') as decimal(10, 2)))) as total
from 
    accounts a
join 
    transactions t on a.id = t.account_id
where 
    month(t.dt) = 9
group by 
    a.iban
order by 
    count(t.amount) desc, 
    total desc
;