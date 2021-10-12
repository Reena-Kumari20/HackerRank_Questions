
let arr=[1,1,0,-1,-1];
let p_c=0;
let n_c=0;
let z_c=0;
let l=arr.length;
for (let i=0;i<l;i++){
    if (arr[i]>0){
        p_c=p_c+1
    }
    if (arr[i]<0){
        n_c=n_c+1
    }
    if (arr[i]==0){
        z_c=z_c+1
    }
}
let p=p_c/l;
let n=n_c/l;
let z=z_c/l;
console.log(p,n,z)
