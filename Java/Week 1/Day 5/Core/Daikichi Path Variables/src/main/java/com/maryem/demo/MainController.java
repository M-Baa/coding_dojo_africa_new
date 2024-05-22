package com.maryem.demo;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


    @RestController
@RequestMapping("/Daikichi")
public class MainController {
    @RequestMapping("")
    public String first(){
        return  "welcome";
    }
    @RequestMapping("/today")
    public String second(){
        return "today you will find luck in all youur endeavors!!";
    }
    @RequestMapping("/tomorrow")
    public String third(){
        return ("tomorrow, an opportunity will arise , so be sure to be open to new ides");
    }
    @RequestMapping("/Daikichi/travel/{Country}")
		public String fourth(@PathVariable("place") String Country) {
			return "Congratulations! You will soon travel to " + Country;



    }
    @RequestMapping("/Daikichi/lotto/{number}")
    public String fifth(@PathVariable("number") int number){
        if (number % 2 ==0){
            return "You will take a grand journey in the near future, but be wary of tempting offers.";
        }else {
        return "You have enjoyed the fruits of your labor, but now is a great time to spend time with family and friends.";
        }
    }
}
