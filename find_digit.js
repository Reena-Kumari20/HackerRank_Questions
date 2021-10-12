
const input=require("readline-sync");
let num=input.question("Enter the digit: ")

function findDigits(n) {
    // Write your code here
    let c=0;
    let n1=n;
    while (n>0){
        let num1=n%10;
        if (num1==0){
            n=parseInt(n/10);
            continue;
        }
        if (n1%num1==0){
            c=c+1;
        }
        n=parseInt(n/10);
    }
    return c
}
console.log(findDigits(num))