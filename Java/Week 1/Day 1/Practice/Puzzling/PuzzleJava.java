import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava{

    public ArrayList<Integer> getTenRolls(){
        Random rand = new Random();

        for (int i=1;i<=10;i++){
            random10.add(rand.nextInt(20)+1);

        }
        return random10;
    }

        public String getRandomLetterWithArray(){
            Random rand = new Random();

        String alphabetString = "abcdefghijklmnopqrstuvwxyz";
        char randomChar = alphabetString.charAt(rand.nextInt(26));

        return String.valueOf(randomChar);
    }


    public String generatePassword() {

        String password = "";

        for(int i = 0; i < 8; i++) {
            password = password + getRandomLetter();
        }
        return password;
    }



    public ArrayList<String> getNewPasswordSet(int length) {

        ArrayList<String> passwordSet = new ArrayList<String>();
        for(int i = 0; i < length; i++) {
            passwordSet.add(generatePassword());
        }
        return passwordSet;

    }


}












