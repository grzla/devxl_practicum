/*
grade normalization
a teacher has a list of student scores from different tests throughout the semester. the scores range from 0 to 100, but the teacher wants to normalize these scores to use a smaller range (1-5) while maintaining the relative performance between students.

example
scores = [45, 90, 45, 65, 90]
there are three distinct score levels: 45, 65, and 90
the normalized scores should be: [1, 3, 1, 2, 3]
the relative performance is maintained (students who scored the same originally still have the same score, higher scores remain higher than lower scores)

function description
complete the normalizeScores function. it must return an integer array representing the normalized scores in the original order.

normalizeScores has the following parameter(s):
int scores[n]: an array of integers representing original test scores

constraints
1 ≤ n ≤ 10⁵
0 ≤ scores[i] ≤ 100
*/

function normalizeScores(scores) {
    // create set of unique scores
    // minimize scores (1,2,3)
    // map scores to minimized scores
    const uniqueScores = [...new Set(scores)].sort((a, b) => (a-b))

    let scoreMap = {}
    
    uniqueScores.forEach((score, index) => {
        scoreMap[score] = index+1
    })

    return scores.map((score) => {
        scoreMap[score]
    })

}