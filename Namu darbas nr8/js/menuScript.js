// JavaScript source code
function pizza() {
    document.getElementById("pizzaList").style.display = "block";
    document.getElementById("saladList").style.display = "none";
    document.getElementById("starterList").style.display = "none";
    document.getElementById("pizza").style.backgroundColor = "#f44336";
    document.getElementById("salads").style.backgroundColor = "black";
    document.getElementById("starter").style.backgroundColor = "black";
}
function salads() {
    document.getElementById("pizzaList").style.display = "none";
    document.getElementById("saladList").style.display = "block";
    document.getElementById("starterList").style.display = "none";
    document.getElementById("pizza").style.backgroundColor = "black";
    document.getElementById("salads").style.backgroundColor = "#f44336";
    document.getElementById("starter").style.backgroundColor = "black";
}
function starter() {
    document.getElementById("pizzaList").style.display = "none";
    document.getElementById("saladList").style.display = "none";
    document.getElementById("starterList").style.display = "block";
    document.getElementById("pizza").style.backgroundColor = "black";
    document.getElementById("salads").style.backgroundColor = "black";
    document.getElementById("starter").style.backgroundColor = "#f44336";
}