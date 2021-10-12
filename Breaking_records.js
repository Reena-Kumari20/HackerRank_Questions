/*Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

int scores[n]: points scored per game
Returns

int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.
Input Format

The first line contains an integer , the number of games.
The second line contains  space-separated integers describing the respective values of .

Constraints

Sample Input 0

9
10 5 20 20 4 5 2 25 1
Sample Output 0

2 4 */
const input=require("readline-sync")
let scores=[10,5,20,20,4,5,2,25,1]
let scores1=[3,4,21,36,10,28,35,5,24,42]
function breakingRecords(scores) {
    // Write your code here
    let max_=scores[0]
    let min_=scores[0]
    let max_count=0
    let min_count=0
    let i=0;
    while (i<scores.length){
        // let max_=scores[i]
        // let min_=scores[i]
        if (scores[i]>max_){
            max_=scores[i]
            max_count++
        }
        if (scores[i]<min_){
            min_=scores[i]
            min_count++
        }
        i++

    }
    return [max_count,min_count]

}
console.log(breakingRecords(scores))
console.log(breakingRecords(scores1))