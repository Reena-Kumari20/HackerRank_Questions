const input=require("readline-sync");
let num=input.questionInt("Enter the digits: ")
function extraLongFactorials(n) {
    // Write your code here
    f = 1;
    for(n; n>1; n--){
        f=f*n
    }
    // let f=1;
    // let i=1
    // while (i<=n){
    //     f=f*i
    //     i++
    // }
    console.log(f);
    let a=BigInt64Array(f)
    console.log(a)
    let c=String(a)
    let b=c.replace('n','')
    return (b)
}
console.log(extraLongFactorials(num))