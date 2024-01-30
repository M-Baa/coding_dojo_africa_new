function greetPersonByNameWithTime(name) {
    
function confrontEnemy(name) {
    if (name === "Count Dooku") {
        return "I'm coming for you, Dooku!";
    }}  
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var greeting;

    if (hours < 12) {
        greeting = "Good morning, " + name + "!";
    } else if (hours < 18) {
        greeting = "Good afternoon, " + name + "!";
    } else {
        greeting = "Good evening, " + name + "!";
    }

    return greeting;
}