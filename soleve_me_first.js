/*Complete the function solveMeFirst to compute the sum of two integers.
Example
Return .
Function Description
Complete the solveMeFirst function in the editor below.
solveMeFirst has the following parameters:
int a: the first value
int b: the second value
Returns
- int: the sum of  and 
Constraints
Sample Input
a = 2
b = 3
Sample Output
5*/

const input=require('readline-sync')
function main() {
    let a =input.questionInt("Enter the number First: ");
    let b =input.questionInt("Enter the number second: ");

    let res = a+b;
    console.log(res);
}
main()