
let arr=[2,3,1,4,6,5];
let arr2=[...arr]
// console.log(arr2)
let max=0
for (let value of arr){
    if (value>max){
        max=value
    }
}
// console.log(max)
y=arr.indexOf(max)
arr.splice(y,1)
// console.log(y)
// console.log(arr)
const z = (x,y) => x + y;
console.log(arr.reduce(z));

let mini=Math.min(...arr2)
// console.log(mini)
t=arr2.indexOf(mini)
s=arr2.splice(t,1)
const p = (o,n) => o+ n;
console.log(arr2.reduce(p));
