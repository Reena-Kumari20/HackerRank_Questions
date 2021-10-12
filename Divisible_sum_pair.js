
ar=[1,2,3,4,5,6];
let i=0;
let c=0;
let k=5;
while (i<ar.length-1){
    let j=i+1;
    while (j<ar.length){
        if ((ar[i]+ar[j])%k==0){
            c=c+1

        }
        j++
    }
    i++
}
console.log(c)