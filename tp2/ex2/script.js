let total = 0.0
let cart = {}

let products = [
    "apple",
    "carrot",
    "strawberry",
    "blueberry",
    "pineapple"
]

let prices = [
    1,
    5,
    3,
    1.5,
    2
]

window.onload = function () {
    updateLabels()
    populateTable()
    document.getElementById("cartButton").addEventListener("click", see_cart);
    document.getElementById("payButton").addEventListener("click", pay);
    for (let i = 0; i < products.length; i++) {
        document.getElementById(`${products[i]}Button`).addEventListener("click", () => choose(i));
    }
}

function populateTable() {
    let rows = `<tr class="colorfulTable">`

    for (let i = 0; i < products.length; i++) {
        rows += `<td class="colorfulTable"> `
        rows += `<a id="${products[i]}Button" href="#">`
        rows += `<img src="assets/${products[i]}.jpg" alt="${products[i]}">`
        rows += `</a>`
        rows += `</td>`
    }

    rows += `</tr>`
    rows += `<tr class="colorfulTable">`

    for (let j = 0; j < prices.length; j++) {
        rows += `<td class="colorfulTable"> ${prices[j]} €/Kg </td>`
    }

    rows += `</tr>`
    document.getElementById('optionsTable').innerHTML = rows;
}

function choose(productIndex) {
    addToCart(productIndex, demandQuantity())
}

function demandQuantity() {
    let quantity = 0
    let input = prompt("How many kgs do you want to add into the cart ?", "0")
    input = parseFloat(input.replace(',', '.'))

    if (typeof (input) == "number" && !isNaN(input)) {
        quantity = input
    }

    return quantity
}

function addToCart(productIndex, quantity) {
    let product = products[productIndex]
    if (product in cart) {
        cart[product] += quantity;
    } else {
        cart[product] = quantity;
    }

    total += calculatePrice(product, quantity)
    updateLabels()
}


function pay() {
    if (isEmpty(cart)) {
        alert("your cart is empty!")
        return
    }

    if (confirm(content_cart() + ` Is that all ?`)) {
        total = 0
        cart = {}
        updateLabels()
    }

}

function updateLabels() {
    document.getElementById("total").innerHTML = `${total.toFixed(2)} €`
}

function see_cart() {
    if (isEmpty(cart)) {
        alert("your cart is empty!")
        return
    }

    alert(content_cart())
}

function isEmpty(obj) {
    return Object.keys(obj).length == 0
}

function content_cart() {
    let content = "Cart Content\n"

    Object.entries(cart).forEach(([product, quantity]) => {
        content += `${product} (${quantity} Kg) : `
        content += calculatePrice(product, quantity)
        content += " €\n"
    });

    content += `Total = ${total} €`

    return content
}


function calculatePrice(product, quantity) {
    return prices[products.indexOf(product)] * quantity
}


