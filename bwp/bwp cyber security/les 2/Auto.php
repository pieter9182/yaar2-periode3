<?php

class Auto
{
    public float $snelheid; // max snelheid in km/u
    public float $brandstofverbruik; // brandstofverbruik in liters per 100 km
    

    /**
     * Constructor om nieuwe Auto objecten te initialiseren
     * @param  float $snelheid
     * @param  float $brandstofverbruik
     * @return void
     */
    public function __constrtuct(float $snelheid, float $brandstofverbruik) {
        $this->snelheid = $snelheid;
        $this->brandstofverbruik = $brandstofverbruik;
    }

    /**
     * Bereken de tijd in uren dat de auto onderweg is
     * @param  float $afstand
     * @return float|int
     */
    public function race($afstand): float|int
    {
        return $afstand / $this->snelheid;
    }

    /**
     * Bereken de brandstofkosten voor een gegeven afstand
     * @param  float $afstand
     * @param  float $prijsPerLiter
     * @return float|int
     */
    public function berekenBrandstofkosten($afstand, $prijsPerLiter): float|int
    {
        $kosten = ($afstand / 100) * $this->brandstofverbruik * $prijsPerLiter;
        return $kosten;
    }
}