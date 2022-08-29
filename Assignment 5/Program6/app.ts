let leapYear:number = Number(prompt("Enter a year"));
if(leapYear % 4 == 0){
    if(leapYear % 100 == 0){
        if(leapYear % 400 == 0){
            console.log("Leap Year");
        }
        else{
            console.log("Not a Leap Year");
        }
    }
    else{
        console.log("Leap Year");
    }
}