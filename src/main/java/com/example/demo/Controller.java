package com.example.demo;


import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@RestController
@RequestMapping("/s")
public class Controller {

    @Autowired
    AppRepo repository;

    @GetMapping("/kinobillett")
    public ArrayList<KinoOrdre> Hent() {
        return repository.Hent();
    }

    @PostMapping("/kinobillett")
    public void Lagre(KinoOrdre ordre) {
        repository.Leggtil(ordre);
    }


    @DeleteMapping("/kinobillett")
    public void Slett() {
        repository.Slett();
    }
}
