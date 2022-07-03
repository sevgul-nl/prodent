package com.bakis.prodent.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	//@RequestMapping(value = "/test/")
	//public String index() {
	//	return "index";
	//}

	@GetMapping("/test")
    public ModelAndView home() {
        ModelAndView mav=new ModelAndView("index");
        return mav;
    }

}