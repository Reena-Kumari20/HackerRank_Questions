const input=require("readline-sync")
let string=input.question("Enter the string => ")
swap = (string) => {
    let i=0
    let sec=''
    while (i<string.length){
        if (string[i]===string[i].toLowerCase()){
            sec+=string[i].toUpperCase()
        }
        else if(string[i]===string[i].toUpperCase()){
            sec+=string[i].toLowerCase()
        }
        else{
            sec+=string[i]
        }
        i++
    }
    return sec;
}
console.log(swap(string))