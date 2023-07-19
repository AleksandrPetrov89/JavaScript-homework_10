document.querySelector(".cart").style.visibility = "hidden";

const products = document.querySelectorAll(".product");
for (let product of products) {

    let decrement = product.querySelector(".product__quantity-control_dec");
    let increment = product.querySelector(".product__quantity-control_inc");
    decrement.addEventListener("click", reduceQuantity, true);
    increment.addEventListener("click", increaseQuantity, true);

    let addElement = product.querySelector(".product__add");
    addElement.addEventListener("click", AddToBasket, true);

    // console.log(product);
};


function reduceQuantity (e) {
    let quantityElement = e.target.nextElementSibling;
    let quantity = Number(quantityElement.textContent.trim());
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }
};

function increaseQuantity (e) {
    let quantityElement = e.target.previousElementSibling;
    let quantity = Number(quantityElement.textContent.trim());
    quantity++;
    quantityElement.textContent = quantity;
};

function AddToBasket (e) {
    const basket = document.querySelector(".cart__products");
    let cartProduct = "";
    if (document.querySelector(".cart__product")) {
        let allCartProduct = Array.from(basket.querySelectorAll(".cart__product"));
        let product = e.target.closest(".product");
        let productId = product.dataset.id;
        cartProduct = allCartProduct.find((cart) => cart.dataset.id == productId);
        if (cartProduct) {
            let countElement = cartProduct.querySelector(".cart__product-count");
            let count = Number(countElement.textContent.trim());
            count += Number(product.querySelector(".product__quantity-value").textContent.trim());
            countElement.textContent = count;
            return;
        };
    } else {
        document.querySelector(".cart").style.visibility = "visible";
    };
    cartProduct = addNewCart(e);
    basket.append(cartProduct);
};

function formCard () {
    let card = document.createElement("div");
    card.innerHTML = '    <img class="cart__product-image" src=""\n>' +
                     '    <div class="cart__product-count"></div>\n' +
                     '    <div class="cart__delete">Удалить</div>'
    card.classList.add("cart__product");
    card.dataset.id = "";
    card.querySelector(".cart__delete").addEventListener("click", deleteCart, true);
    return card;
};

function addNewCart (e) {
    let cartProduct = formCard();
    let product = e.target.closest(".product");
    cartProduct.dataset.id = product.dataset.id;
    let link = product.querySelector(".product__image").src;
    cartProduct.querySelector(".cart__product-image").src = link;
    let count = product.querySelector(".product__quantity-value").textContent.trim();
    cartProduct.querySelector(".cart__product-count").textContent = count;
    return cartProduct;
};

function deleteCart (e) {
    e.target.closest(".cart__product").remove();
    if (!document.querySelector(".cart__product")) {
        document.querySelector(".cart").style.visibility = "hidden";
    };
};
