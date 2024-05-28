package com.maryem.Omikuji.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class FormController {
	@RequestMapping("/")

	public String index() {
		return "index.jsp";
	}

	@RequestMapping("/omikuji")
	public String form(@RequestParam(value = "city") String city, @RequestParam(value = "person") String person,
			@RequestParam(value = "hobby") String hobby, @RequestParam(value = "thing") String thing,
			@RequestParam(value = "something") String something, HttpSession session) {
		session.setAttribute("city", city);
		session.setAttribute("person", person);
		session.setAttribute("hobby", hobby);
		session.setAttribute("thing", thing);
		session.setAttribute("something", something);
		return "redirect:/show";
	}

	@RequestMapping("/show")
		
	
	public String  show() {
		return "show.jsp";
	



	}
}
