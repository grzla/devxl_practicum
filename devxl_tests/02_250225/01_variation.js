/*
book reading schedule
a student needs to read a series of book chapters before their exam. each chapter has a difficulty rating. the student can only read one chapter per day, and to maintain consistent studying, they must read chapters on consecutive days.

the student wants to minimize study fatigue. fatigue is calculated as the difference between the highest and lowest difficulty ratings of chapters read in their study schedule.

rules:
- student must start with chapter 1 (index 0)
- after reading chapter i, they can either:
  a) read the next chapter (i+1), or
  b) take a break day and read chapter (i+2) the following day
- student must read at least k chapters to cover enough material
- if they cannot meet the minimum chapter requirement k, they must read all chapters

example:
difficulty = [2, 5, 3, 7, 4, 8]
k = 3 chapters minimum

if student reads chapters [0, 1, 2], fatigue = 5 - 2 = 3
if student reads chapters [0, 2, 4], fatigue = 4 - 2 = 2
return 2 (minimum possible fatigue while reading at least 3 chapters)

function description:
complete the function minFatigue that returns the minimum possible fatigue level.

parameters:
int k: minimum number of chapters required
int difficulty[n]: array of chapter difficulty ratings

returns:
int: the minimum possible fatigue level
*/

function minFatigue(k, difficulty) {

}