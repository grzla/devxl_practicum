/*
5. Efficient Algorithm Pairing

In a recommendation system, n algorithms are available for deployment. Each algorithm has a performance score and a resource
cost represented by the arrays performance and resourceCost respectively.

Implement a function to determine the number of pairs of algorithms that can be deployed such that their combined
performance exceeds their combined cost. More specifically, algorithms i and j can be deployed only if -

• (performance[i] + performance[j]) - (resourceCost[i] + resourceCost[j]) > 0, where 0 ≤ i < j < n.

The function getDeployablePairs takes the following parameters:
  int performance[n]: the performance score of each algorithm
  int resourceCost[n]: the resource cost of each algorithm

The function should return the number of algorithm pairs where their combined performance exceeds their combined cost.

Example
n = 5
performance = [2, 3, 7, 1, 1]
resourceCost = [3, 4, 5, 1, 2]

The deployable algorithm pairs:

Pair (i,j) of       performance[i] +      resourceCost[i] +     Combined
algorithms          performance[j]         resourceCost[j]       performance-
(0-based)                                                        resourceCost
[0, 2]              2 + 7 = 9              3 + 5 = 8             9 - 8 = 1
[1, 2]              3 + 7 = 10             4 + 5 = 9             10 - 9 = 1
[2, 3]              7 + 1 = 8              5 + 1 = 6             8 - 6 = 2
[2, 4]              7 - 1 = 8              5 + 2 = 7             8 - 7 = 1

No other pairs generate a net positive performance. There are 4 deployable algorithm pairs.

Hence, the answer is 4.

Constraints
• 1 ≤ n ≤ 2 * 10^5
• 1 ≤ performance[i], resourceCost[i] ≤ 10^9
*/

// my solution - to be optimized
/*
 * Complete the 'getDeployablePairs' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY performance
 *  2. INTEGER_ARRAY resourceCost
 */

function getDeployablePairs(performance, resourceCost) {
    let count = 0
    let n = performance.length
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            if (performance[i] + performance[j] 
                - (resourceCost[i] + resourceCost[j]) 
                > 0) {
                count++
                console.log(`res/perf [${i},${j}]: 
                [${resourceCost[i]},${resourceCost[j]}]  
                [${performance[i]},${performance[j]}]`)
            }
        }
    }
    return count
}