// JavaScript source code
document.getElementById("submit").addEventListener("click", skaiciavimas);
function skaiciavimas() {
    var h = parseFloat(document.getElementById("aukstis").value);
    var w = parseFloat(document.getElementById("plotis").value);
    var option = document.getElementsByName("pasirinkimas");
    var checkedValue;
    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            checkedValue = option[i].value;
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