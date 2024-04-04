class Ninja {
    constructor(name){
        this.name=name;
        this.health=90;
        this.speed=3;
        this.strength=3;
    }


// add a method: sayName() - This should log that Ninja's name to the console
sayName(){
    console.log('My name is ${this.name}.');
}

showStats(){
    console.log('Name:${this.name},strength:${this.strength},speed:${this.speed},health:${this.health}');

}

drinkSake(){
    this.health += 10;
    console.log('${this.name}  gains 10 health his health would be ${this.health}');
}
}

const ninja1 = new ninja("Hyabusa");
ninja1.sayName();
ninja1
showStats();