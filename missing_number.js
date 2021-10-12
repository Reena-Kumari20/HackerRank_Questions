let missing= (arr,brr) => {
    let l1=arr.length
    let l2=brr.length
    let arr1=[]
    for (let i=0;i<l1;i++){
        for (let j=0;j<l2;j++){
            if (!arr.includes(brr[j])){
                arr1.push(brr[j])
            }
        }
    }
    for (let k=0;k<l2;k++){
        for (let l=0;l<l1;l++){
            if (!brr.includes(arr[l])){
                arr1.push(arr[l])
                
            }
        }
    }
    return arr1
    // let a= [...new Set(arr1)];
    // return a

}
console.log(missing([7,2,5,3,5,3],[7,2,5,4,6,3,5,3]))
console.log(missing([203,204,205,206,207,208,203,204,205,206],[203,204,204,205,206,207,205,208,203,206,205,206,204]))