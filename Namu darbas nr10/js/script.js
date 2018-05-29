// JavaScript source code
document.getElementById("submit").addEventListener("click", skaiciavimas);
function skaiciavimas() {
    var h = parseFloat(document.getElementById("aukstis").value); //aukscio reiksme
    var w = parseFloat(document.getElementById("plotis").value); //plocio reiksme
    if (h < 0 || w < 0) {
        alert("?veskite teigiam? reikšm?"); //Patikrinam ar ivesta reiksme teigiama ar ne, jei neigiama nutraukiam funkcija.
        return;
    }
    var option = document.getElementsByName("pasirinkimas"); //gauname radio reiksmes
    var checkedValue;
    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            checkedValue = option[i].value; //tikriname visas gauto masyvo reiksmes ar pazymeta, jei pazymeta priskiriame prie kintamojo 
        }
    }
    switch (checkedValue) {
        case "Perimetras":
            document.getElementById("atsakymas").value = 2 * (h + w);
            break;
        case "Plotas":
            document.getElementById("atsakymas").value = h * w;
            break;
        case "Istrizaine":
            document.getElementById("atsakymas").value = Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2)).toFixed(2);
    }
}