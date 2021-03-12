package com.example.demo;

import org.springframework.stereotype.*;

import java.util.ArrayList;

@Repository
public class AppRepo {
    private final ArrayList<KinoOrdre> ordreliste = new ArrayList<>();

    public void Leggtil(KinoOrdre array ) {
        ordreliste.add(array);
    }

    public ArrayList<KinoOrdre> Hent() {
        return ordreliste;
    }

    public void Slett() {
        ordreliste.clear();
    }
}