import java.util.Date;


public class alfredQuotes {



        public String basicGreeting(){
        return "Hello, lovely to see you. Isn't it nice out today?";

    
        }

        public String guestGreeting(String name, String dayPeriod){
            return String.format("Good %s, %s. lovely to see you." , dayPeriod, name);

        }

        public String dateAnnouncement(){
            return String.format("It is currently %s", new Date());

        }

        public String answeringBeforeAlexisy(String phrase){
            if(phrase.indexOf("Alexis") > -1 ){
                return "She's really of no helo. what can i get for you?";

            }
            if (phrase.indexOf("Alfred")> -1){
                return "At your service,naturally. how may i be of assistance?";

            }

            return "right. and with that i shall retire";
        }

}