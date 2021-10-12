const input=require("readline-sync")
let s1=input.question("Enter the string: ")
var s2= "";
function myFunction(s1) {
    // var s2= "";
    var freq = {};
    for(i=0;i<s1.length;i++){
       let char = s1[i];
       if(freq[char]) {
        freq[char]++;      
       } else {
        freq[char] =1
        s2= s2+char;
       }
    }
    // return result;
    }
    let c1_s21=s2[0]
    let c2_s21=s2[1]
    let c1=0
    let c2=0
    let j=0
    while (j<=1){
        let k=0
        while (k<s1.length){
            if (j==0){
                if (s2[0]==s1[k]){
                  c1++
                }
            if (j==1){
                if (s2[1]==s1[k]){
                    c2++
                }
            }
            k++
        }
        j++
    }
    if (c1<2 && c2<2){
        return ("NO")
    }
    else{
        return ("YES")
    }
}
console.log(myFunction(s1))
