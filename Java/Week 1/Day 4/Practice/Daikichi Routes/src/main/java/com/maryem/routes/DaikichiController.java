package com.maryem.routes;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;




@RestController
@RequestMapping("/Daikichi")
public class DaikichiController {
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
}
