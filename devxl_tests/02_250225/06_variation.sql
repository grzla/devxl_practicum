/*
sql: video game achievement analysis
a gaming platform wants to analyze player achievements to identify potentially suspicious activity. they need a report of players who have earned achievements unusually quickly.

write a query to find players who have earned achievements faster than the typical completion time. an achievement is considered suspicious if:
- it was completed in less than 50% of the average completion time for that achievement
- the player earned 3 or more achievements in the same hour
- the achievement is marked as 'rare' (less than 5% of players have it)

return these columns:
player_id | achievement_count | fastest_completion
player_id - unique identifier for the player
achievement_count - number of suspicious achievements
fastest_completion - the shortest time (in minutes) taken to complete any achievement

sort by achievement_count desc, fastest_completion asc

schema:
players table:
| name | type | constraint | description |
|------|------|------------|-------------|
| id | int | primary key | player id |
| username | varchar(255) | | player username |
| created_at | timestamp | | account creation date |

achievements table:
| name | type | constraint | description |
|------|------|------------|-------------|
| id | int | primary key | achievement id |
| title | varchar(255) | | achievement name |
| difficulty | enum('easy','medium','hard') | | difficulty level |

player_achievements table:
| name | type | constraint | description |
|------|------|------------|-------------|
| player_id | int | foreign key (players.id) | player id |
| achievement_id | int | foreign key (achievements.id) | achievement id |
| completed_at | timestamp | | when achievement was earned |
| time_taken | int | | minutes taken to complete |
*/

-- your code here