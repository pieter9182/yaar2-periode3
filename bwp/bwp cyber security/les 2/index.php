<?php

$snelheid = 100;
$brandstofverbruik = 5;
$afstand = 55;
$benzinePrijs = 2;
$wielen = 4;
$wiellefensheid = 65.000; //in km
$kleur = "black";


$auto = new Auto($snelheid, $brandstofverbruik);

$tijd = $auto->race($afstand);
$kosten = $auto->berekenBrandstofkosten($afstand, $benzinePrijs);

echo 'De auto rijdt '.$tijd.' uur. ';
echo 'De kosten voor deze rit zijn '.number_format($kosten, 2) .' euro. ';

?>