const input=require("readline-sync")
let str1=input.question("Enter the digit ==> ")
let num1=input.questionInt("Enter the number ==> ")
function string(){
    let i=1
    var sum=0
    while (i<=num1){
        let j=0
        // let l=str.length
        while (j<str1.length){
            sum=sum+parseInt(str1[j])
            j=j+1
        }
        i=i+1
    }
    str1=String(sum)
    console.log(typeof str1)
    console.log(str1,"****")
    print(str1.length)
    if (str1.length>1){
        string()
        return sum
    }
    else{
        return sum
    }
}
console.log(string())
