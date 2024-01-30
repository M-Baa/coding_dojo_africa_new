function decideDrinkBasedOnTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var dayOfWeek = currentTime.getDay(); 
    if (hours < 10) {
        console.log("I want a latte");
    } else if (hours >= 10 && hours <= 16) {
        console.log("I want a hot chocolate");
    } else if (hours > 16 && hours <= 22) {
        if (dayOfWeek === 3) {  
            console.log("I want strawberry ice cream");
        } else {
            console.log("I want vanilla ice cream");
        }
    } else {
        console.log("I don't want anything other than sleep!");
    }
}

decideDrinkBasedOnTime(