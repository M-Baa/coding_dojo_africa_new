public class Phone extends Device{
    public void makeCall(){
        if (battery > 0){
            System.out.println("you re making a call ");
            battery -=5;
            status();
            checkBatteryCritical();
        
        }
    }

    public void PlayGame(){
        if(battery >= 25){
            System.out.println("you re playing a game");
            battery -=20;
            status();
        }
    }
    public void Charge(){
        System.out.println("you are charging your phone");
        battery +=50;
        status();
    }
    private void checkBatteryCritical(){
        if (battery <10){
            System.out.println(" WARNING !! battery critical PLEASE CHARGE YOUR PHONE");
        }
    }
}