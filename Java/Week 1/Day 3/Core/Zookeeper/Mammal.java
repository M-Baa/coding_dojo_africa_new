public class Mammal{
    private int energyLevel;

    public Mammal(){
        this.energyLevel=100;
    }



    public int displayEnergy(){
        System.out.println("the energy level is "+ this.energyLevel);
        return this.energyLevel;
    }
}