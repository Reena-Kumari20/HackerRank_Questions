
let arr=[2,3,1,4,6,5];
// console.log(arr2)
let max=0
for (let value of arr){
    if (value>max){
        max=value
    }
}

let c=0;
for (let value2 of arr){
    if (value2===max){
        c=c+1
    }
}
console.log(c)
