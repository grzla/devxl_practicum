/*
SQL: Credentials Manager Salt Validation
As part of a credential management platform security audit, find the number of active encryptions where the salt string used in the encryption process is too short.
The result should have the following columns: mac | salts.
mac - account MAC address
salts - total number of encryption salts that are too short
The result should be sorted in ascending order by mac.
Note:
A salt string is too short if its length is less than 8.
Only active encryptions should be included in the result.
Schema:
accounts table:
| name | type | constraint | description |
|------|------|------------|-------------|
| id | INT | PRIMARY KEY | Account ID |
| mac | VARCHAR(255) | | MAC address |
encryptions table:
| name | type | constraint | description |
|------|------|------------|-------------|
| account_id | INT | FOREIGN KEY (account_id => accounts.id) | Account ID |
| salt | VARCHAR(255) | | Salt |
| is_active | BOOLEAN | | Activity flag |
*/

/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/
select a.mac, count(e.salt) as salts
from accounts a
join encryptions e
on a.id = e.account_id
where e.is_active = true
and length(e.salt) < 8
group by a.mac
order by a.mac
;