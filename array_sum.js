/*Given an array of integers, find the sum of its elements.

For example, if the array , , so return .

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Constraints


Output Format

Print the sum of the array's elements as a single integer.

Sample Input

6
1 2 3 4 10 11
Sample Output

31*/

const input=require('readline-sync');
let length_of_array=input.questionInt("Enter the length of array: ")
let array=[]
for (let i=1;i<=length_of_array;i++){
    let num=input.questionInt("Enter the elements: ")
    array.push(num)
}
console.log(array);

function simpleArraySum(ar) {
    let sum=0;
    for (let value of ar){
        sum=sum+value
    }
    return (`Given an array of integers,the sum of its elements=> ${sum}`)
    
}
console.log(simpleArraySum(array))