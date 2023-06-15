let data = JSON.parse(localStorage.getItem("productData"))
  ? JSON.parse(localStorage.getItem("productData"))
  : [];

JSON.parse(localStorage.getItem("cart"));

let useForTotals = [];

const backdropIssue = document.querySelector("#backdropIssue");

backdropIssue.addEventListener("click", () => {
  try {
    const backdropProblem = document.querySelector(".modal-backdrop");
    backdropProblem.style.display = "none";
  } catch (e) {
    alert(e);
  } finally {
    const backdropProblem = document.querySelector(".modal-backdrop");
    backdropProblem.style.display = "none";
  }
});

function displayProducts() {
  let container = document.querySelector("#container2");
  data.forEach((gimme, i) => {
    container.innerHTML += `
      <div class="col">
        <div class="card h-100 shadow">
          <img
            id="productImage"
            src="${gimme.image}"
            class="card-img-top"
            alt="Product Image"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold" id="title">${gimme.name}</h5>
            <p class="card-text" id="description">${gimme.desc}</p>
            <p class="card-text" id="price">${gimme.price}</p>
            <button type="button" id="addToCart" class="btn btn-info">
              Add To Cart
            </button>
          </div>
        </div>
        </div>`;
  });
}
displayProducts();
addToCart();

let cartItems = [];

function addToCart() {
  const cartButton = [...document.querySelectorAll("#addToCart")];
  const body = document.querySelector("#modalBody");
  cartButton.forEach((buton, i) => {
    buton.addEventListener("click", (e) => {
      body.innerHTML = "";
      const cardBody = e.target.parentElement;
      const titlee = cardBody.firstElementChild;
      const descc = cardBody.firstElementChild.nextElementSibling;
      const img =
        cardBody.parentElement.firstChild.nextSibling.getAttribute("src");
      const price =
        cardBody.firstElementChild.nextElementSibling.nextElementSibling;
      let product = {
        name: titlee.innerText,
        image: img,
        desc: descc.innerText,
        price: price.innerText,
      };
      cartItems.push(product);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      cartItems.forEach((luffy, i) => {
        let newData = `
        <div class="row" id="almostDone">
        <div class="col d-flex align-items-center justify-content-between" id="cartTitle">${luffy.name}</div>
        <div class="col d-flex align-items-center justify-content-between" id="cartImage"><img id="myPic" src="${luffy.image}"></div>
        <div class="col d-flex align-items-center justify-content-between" id="cartPrice">${luffy.price}</div>
        <div class="col d-flex align-items-center justify-content-between" id="actions">
        <input type="number" name="cartQuantity" value="1" onchange="updating()" id="cartQuantity">
        <button class="btn-danger" id="remove">Remove</button>
        </div>
      </div>
        `;
        let putHere = document.querySelector("#modalBody");
        let addHere = document.querySelector("#exampleModal");
        putHere.innerHTML += newData;
        updateTotal();
        removeFromCart();
      });
    });
  });
}

function checkCheckout() {
  const buton = document.querySelectorAll("#remove");
  if (addHere.innerHTML !== butons) {
    alert("CART IS EMPTY");
  }
}

function updateTotal() {
  const modalBody = document.querySelector("#modalBody");
  if (modalBody.textContent.trim().length === 0) {
    const total = document.querySelector(".yesss");
    total.innerHTML = "Total: R0.00";
  } else {
    const total = document.querySelector(".yesss");
    let hiThere = JSON.parse(localStorage.getItem("cart"));
    let sum = 0;

    hiThere.forEach(function (e) {
      let newCounting = new addingTotals();
      let price = e.price;
      price = price.replace("R", "");
      price = Number(price);
      useForTotals.push(price);
      useForTotals = [...new Set(useForTotals)];
      let totall = 0;
      useForTotals.forEach(function randomFunctionName(e) {
        totall += e;
        this.increaseFunction();
      }, newCounting);

      total.innerHTML = "Total: " + "R" + totall;
    });
  }
}

// Constructor function to work with and manipulate the total in the cart
function addingTotals() {
  this.count = 0;
  let numberInUse = this;
  return {
    increaseFunction: function () {
      numberInUse.count++;
    },
    currentFunction: function () {
      return numberInUse.count;
    },
    resetFunction: function () {
      numberInUse.count = 0;
    },
  };
}

let quantityArray = [];
function updating() {
  let newCounting = new addingTotals();
  let quantities = [...document.querySelectorAll("#cartQuantity")];
  let totall = 0;
  useForTotals.forEach(function randomFunctionName(e) {
    totall += e;
    this.increaseFunction();
  }, newCounting);
  quantities.forEach((quan) => {
    if (quan.value <= 0) {
      quan.value = 1;
    }
    let total = document.querySelector(".yesss");
    let multiply = totall * quan.value;
    quantityArray.push(quan.value);
    total.innerHTML = "";
    total.innerHTML = "Total: " + "R" + multiply;
  });
}

function removeFromCart() {
  const removeButtons = [...document.querySelectorAll("#remove")];

  removeButtons.forEach((data, i) => {
    data.addEventListener("click", (e) => {
      let i = removeButtons.indexOf(e.target);
      let target = e.target.parentElement.parentElement;
      target.remove();
      cartItems.splice(i);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      let total = document.querySelector(".yesss");
      total.innerHTML = "";
      addToCart();
    });
  });
}

let cart = localStorage.setItem("cart", JSON.stringify(cartItems));
