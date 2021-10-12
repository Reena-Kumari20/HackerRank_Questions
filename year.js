const input=require("readline-sync")
let year=input.questionInt("Enter the year: ")
function dayOfProgrammer(year) {
    if (year%4==0 && year%100!=0){
        let total_day=256;
        let date=total_day-244;
        let months=9;
        return(`${date}.${'0'+months}.${year}`)
    }
    else if (year>=1800){
        let total_day=256;
        let date=total_day-243;
        let months=9;
        return(`${date}.${'0'+months}.${year}`)

    }
    else if(year>=1800 && year%4==0 && year%100!=0){
        let total_day=256;
        let date=total_day-244;
        let months=9;
        return(`${date}.${'0'+months}.${year}`)

    }
    else{
        let total_day=256;
        let date=total_day-243;
        let months=9;
        return(`${date}.${'0'+months}.${year}`)

    }

}
console.log(dayOfProgrammer(year))