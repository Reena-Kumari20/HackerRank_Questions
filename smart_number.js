const input=require('readline-sync')
const num=input.questionInt('Enter the number: ')
function smart_number(num){
    for (let i=0;i<=num;i++){
        if (num%i==0){
            console.log(i)
        }
    }

}
smart_number(num)