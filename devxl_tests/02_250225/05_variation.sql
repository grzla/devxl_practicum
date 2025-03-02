/*
sql: password policy compliance audit
as part of a security audit, you need to identify user accounts that have password histories that don't meet the company's password complexity requirements.

a password is considered complex enough if it meets all these criteria:
- contains at least 12 characters
- contains at least one special character (@, #, $, %, &)
- hasn't been reused within the last 3 password changes

write a query to find accounts with password histories that violate these rules.

the result should have these columns:
username | violations
username - the account username
violations - count of password history entries that violate the rules

sort the results by username in ascending order.

schema:
accounts table:
| name | type | constraint | description |
|------|------|------------|-------------|
| id | int | primary key | account id |
| username | varchar(255) | | username |
| is_active | boolean | | whether account is active |

password_history table:
| name | type | constraint | description |
|------|------|------------|-------------|
| id | int | primary key | history entry id |
| account_id | int | foreign key (accounts.id) | account id |
| password_hash | varchar(255) | | hashed password |
| password_text | varchar(255) | | plain password (for testing only) |
| created_at | timestamp | | when password was set |
*/

-- your code here