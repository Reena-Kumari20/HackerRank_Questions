// A pangram is a string that contains every letter of the alphabet. 
// Given a sentence determine whether it is a pangram in the English alphabet. 
// Ignore case. Return either pangram or not pangram as appropriate.

const input=require("readline-sync")
const string=input.question("Enter the string: ")
let a=(s)=>{
    let str1=s.toLowerCase();
    let str2=''
    for (let i=0;i<str1.length;i++){
        if (str2.includes(str1[i]) || str1[i].includes(' ')){
            continue
        }
        else{
            str2=str2+str1[i]
        }
    // return str2
    }
    // return str2
    console.log(str2.length)
    let count=(26==str2.length) ? "pangrams":"not pangrams"
    return count
}
console.log(a(string))