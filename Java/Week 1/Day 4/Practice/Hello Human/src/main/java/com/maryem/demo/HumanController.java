package com.maryem.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class HumanController {
    @RequestMapping("/")
    public String human (@RequestParam (value="q", required = false) String searchQuery) {
        return "hello Human";
    }
    
    
}
