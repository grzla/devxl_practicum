/*
Create a query for a tax calculator web service. It should return a list of all accounts, the total taxable income, the account's individual tax rate, and the payable amount of tax.

The result should have the following columns: iban | income | groups | tax | total_tax.

iban - account IBAN

income - list of income records for a specific account:
 - Record is the amount of income.
 - Records are separated by a comma.
 - Records are sorted in ascending order of the quarter they appeared in.

groups - list of tax group records for a specific account:
 - Record format is ## (##), where the placeholders are ## in the order they appear:
    1. Tax group name
    2. Tax group rate
 - Records are separated by a comma.
 - Records are sorted in ascending order of the quarter they were applied in.

tax - list of calculated tax records for a specific account:
 - The entry is the amount of tax payable, calculated as a percentage of the tax of the relevant tax group withheld from the amount of income, rounded to two decimal places.
 - Records are separated by a comma.
 - Records are sorted in ascending order of the quarter they were calculated in.

total_tax - total payable amount of tax, calculated as a sum of all records in tax.

The result should be sorted in ascending order by iban.
*/

select 
    a.iban,
    group_concat(distinct d.income order by d.quarter separator ',') as income,
    group_concat(concat(tg.name, '(', tg.rate, ')') order by d.quarter separator ',') as `groups`,
    group_concat(round(d.income * cast(substring_index(tg.rate, '%', 1) as decimal) / 100, 2) order by d.quarter separator ',') as tax,
    sum(round(d.income * cast(substring_index(tg.rate, '%', 1) as decimal) / 100, 2)) as total_tax
from 
    accounts a
join 
    declarations d on a.id = d.account_id
join 
    tax_groups tg on d.tax_group_id = tg.id
group by 
    a.iban
order by 
    a.iban
;