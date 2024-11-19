var total = 0;
var panier = 0;


function choisir(price) {
    total += price
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


function askAmount(prix) {
    const alertBox = document.createElement("div")
    alertBox.className = "quantity-alert"
    alertBox.innerHTML =
        `
    <h2>Quantité</h2>
    <p>Combien de kg voulez-vous ajouter à votre panier ?</p>
    <input type="number" id="quantity" value="1">
    <button onclick="addQuantity()">OK</button>
    `;

    let amount = alertBox.getElementById("quantity").value

    choisir(prix * amount)
}