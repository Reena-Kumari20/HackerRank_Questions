const input=require("readline-sync")
const string1=input.question("Enter the string: ")
const string2=input.question("Enter the string: ")
let common=(str1,str2)=>{
    let str3=''
    for (let i=0;i<str1.length;i++){
        if (str2.includes(str1[i])){
            str3=str3+str1[i]
        }   
    }
    let a=[...str3]
    console.log(a)
    let uniq = [...new Set(a)];
    console.log(uniq)
    return uniq.length
}    
console.log(common(string1,string2))
