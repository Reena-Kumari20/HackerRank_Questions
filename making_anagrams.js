const input=require("readline-sync")
let string1=input.question("Enterr the first string:")
let string2=input.question("Enterr the second string:")
let anagrams=(s1,s2)=>{
    let s3=''
    for (let i=0;i<s1.length;i++){
        if (!s3.includes(s1[i])){
            s3=s3+s1[i]
        }
    }
    for (let j=0;j<s2.length;j++){
        if (!s3.includes(s2[j])){
            s3=s3+s2[j]
        }
    }
    let len=s3.length
    return len
}
//     return len
console.log(anagrams(string1,string2))
