
const input=require("readline-sync");
let num=input.question("Enter the digit: ")
function camelcase(s) {
    let c=0;
    for (let i=0;i<s.length;i++){
        if (s[i]==s[i].toUpperCase()){
            c=c+1
        }
    }
    return (c+1)
}
console.log(camelcase(num))