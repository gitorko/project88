package com.demo.project88;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.IntStream;

import com.demo.project88.domain.Customer;
import com.demo.project88.repo.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Main implements CommandLineRunner {

    @Autowired
    CustomerRepository customerRepo;

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        List<String> city = Arrays.asList("London", "New York", "Bangalore");
        customerRepo.deleteAll();
        IntStream.range(1, 201).forEach(i -> {
            int randomIndex = new Random().nextInt(2 - 0 + 1) + 0;
            customerRepo.save(Customer.builder()
                    .firstName("first_" + i)
                    .lastName("last_" + i)
                    .city(city.get(randomIndex))
                    .build());
        });
    }
}
