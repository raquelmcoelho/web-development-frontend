var total = 0;
var panier = 0;


function choisir(produit) {
    total += prix(produit)
    panier += 1
    updateLabels()
}

function prix(produit) {
    return parseInt(document.getElementById(produit + "prix").innerHTML)
}

function payer() {
    if (total == 0) {
        alert("Votre panier est vide!")
        return
    }

    if (confirm(`Vous devez ${total} euros ! Ce sera tout ?)`)) {
        total = 0
        panier = 0
        updateLabels()
    }
}

function updateLabels() {
    document.getElementById("total").innerHTML = total
    document.getElementById("panier").innerHTML = panier
}

window.onload = function () {
    updateLabels()
}