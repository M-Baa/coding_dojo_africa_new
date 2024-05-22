public class Gorilla extends Mammal {
    public void throwSomething(){
        this.energyLevel -=5;
        System.out.println("The gorilla has thrown something! Energy decreased by 5");
    }


    public void eatBanana(){
        this.energyLevel +=10;
        System.out.println("The gorilla is satisfied! ");
    }
    public void climb(){
        this.energyLevel -=10 ;
        System.out.println("the gorilla has climbed a tree");
    }
}
