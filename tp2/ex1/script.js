var total = 0.0
var items = 0


function choose(product) {
    total += price(product)
    items += 1
    updateLabels()
}

function price(product) {
    console.log(`result ${document.getElementById(product + "price").innerHTML}`)
    return parseFloat(document.getElementById(product + "price").innerHTML)
}

function pay() {
    if (total == 0) {
        alert("your cart is empty!")
        return
    }

    if (confirm(`you owe ${total} € ! Is that all ?`)) {
        total = 0
        items = 0
        updateLabels()
    }
}

function updateLabels() {
    document.getElementById("total").innerHTML = `${total} €`
    document.getElementById("items").innerHTML = items
}

window.onload = function () {
    updateLabels()
}