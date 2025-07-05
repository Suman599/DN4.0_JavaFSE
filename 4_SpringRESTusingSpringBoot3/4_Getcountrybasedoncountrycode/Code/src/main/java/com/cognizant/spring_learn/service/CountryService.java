package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;



    @Service
    public class CountryService {

        private List<Country> countries;

        public CountryService() {
            ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
            countries = (List<Country>) context.getBean("countryList");
        }

        public Country getCountry(String code) {
            System.out.println("Start - getCountry()");
            return countries.stream()
                    .filter(c -> c.getCode().equalsIgnoreCase(code))
                    .findFirst()
                    .orElse(null);
        }
    }


