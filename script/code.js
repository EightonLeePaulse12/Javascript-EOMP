JSON.parse(localStorage.getItem("productData"))
  ? JSON.parse(localStorage.getItem("productData"))
  : [];

// ADMIN PAGE

// EMPTY ARRAY IN CASE I NEED IT AT ANY POINT
let empty = [];

// TBODY TO PUT MY PRODUCTS IN
let wrapper = document.querySelector("#products");

// PRODUCTS ARRAY OF OBJECTS
let products = [
  {
    name: "Black Cotton T-shirt",
    image:
      "https://i.postimg.cc/qR9rPmCZ/Mens-Poker-Skeleton-Hand-Graphics-Street-100-Cotton-Short-Sleeve-T-Shirt-Black-S.png",
    desc: "Black T-Shirt.",
    price: "R279.99",
  },
  {
    name: "White Cotton hoodie",
    image:
      "https://i.postimg.cc/k4WY5wpH/Drop-Shoulder-Hoodie-with-Slit-Beige-2-XL.jpg",
    desc: "White Hoodie.",
    price: "R949.99",
  },
  {
    name: "Black Sleeveless Puffer Jacket",
    image:
      "https://i.postimg.cc/0yqQMNjH/Chalecos-acolchados-con-capucha-y-sin-mangas-de-color-s-lido-con-bolsillo-y-cremallera-de-color-s-li.png",
    desc: "Puffer Jacket.",
    price: "R449.99",
  },
  {
    name: "Black BOSS Tracksuit Pants",
    image: "https://i.postimg.cc/MZ5nPBGy/BOSS-Men-s-Tracksuit-Pants-Black.jpg",
    desc: "Black Tracksuit",
    price: "R379.99",
  },
  {
    name: "Hoodied Jersey",
    image:
      "https://i.postimg.cc/gJPPnjGk/Plaid-Button-Front-Brushed-Hooded-Jacket-Purple-2-XL.jpg",
    desc: "Buttoned Hoodied Jersey",
    price: "R749.99",
  },
  {
    name: "Light grey shorts",
    image: "https://i.postimg.cc/Jz1DB74x/Waist-Tie-Active-Shorts-Blue-12.jpg",
    desc: "Grey Shorts.",
    price: "R467.99",
  },
];

displayData();
// DISPLAY PRODUCTS FUNCTION

function displayData() {
  wrapper.innerHTML = "";
  products.forEach((product, index) => {
    wrapper.innerHTML += `
    <tr>
              <th scope="row" id="adminName">${product.name}</th>
              <td><img id="adminImage" src="${product.image}"></td>
              <td id="adminPrice">${product.price}</td>
              <td>
              <button type="button" id="newTarget" class="btn btn-primary" data-bs-toggle="modal" data-bs-target='#addModal${
                index + 1
              }'>
                Edit
              </button>
              <div class="modal fade" id='addModal${
                index + 1
              }' tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="addModalLabel">Edit Product</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <label for="modalInputName">Product Name</label>
                    <input type="text" id="modalInputName" value="${
                      product.name
                    }" placeholder="Enter Product Name:">
                    <label for="modalInputName">Product Image</label>
                    <input type="text" id="modalInputImage" value="${
                      product.image
                    }" placeholder="Enter Product Image URL:">
                    <label for="modalInputName">Product Description</label>
                    <input type="text" id="modalInputDesc" value="${
                      product.desc
                    }" placeholder="Enter Product Description">
                    <label for="modalInputName">Product Price</label>
                    <input type="text" id="modalInputPrice" value="${
                      product.price
                    }" placeholder="Enter Product Price in Rands">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" id="save">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" id="remove" class="btn btn-danger">Delete</button>
              </td>
            </tr>
    `;
  });

  pleaseEdit();
  removeThingy();
}

// ADD BUTTON'S FUNCTION

function addData() {
  const productName = document.querySelector("#modalInputName2");
  const productImage = document.querySelector("#modalInputImage2");
  const productDesc = document.querySelector("#modalInputDesc2");
  const productPrice = document.querySelector("#modalInputPrice2");
  // Save data
  let newContent = {
    name: productName.value,
    image: productImage.value,
    desc: productDesc.value,
    price: productPrice.value,
  };

  products.push(newContent);
  productName.value = "";
  productImage.value = "";
  productDesc.value = "";
  productPrice.value = "";
  localStorage.setItem("productData", JSON.stringify(products));
  wrapper.innerHTML = "";
  displayData();
}

// EDIT BUTTON'S FUNCTION

function pleaseEdit() {
  const saveButton = [...document.querySelectorAll("#save")];
  saveButton.forEach((ja, i) => {
    ja.addEventListener("click", (e) => {
      e.preventDefault();
      // let index = saveButton.indexOf(e.target)
      let changeName = [...document.querySelectorAll("#modalInputName")];
      let changeImage = [...document.querySelectorAll("#modalInputImage")];
      let changeDesc = [...document.querySelectorAll("#modalInputDesc")];
      let changePrice = [...document.querySelectorAll("#modalInputPrice")];
      let itemNames = [...document.querySelectorAll("#adminName")];
      let itemPrices = [...document.querySelectorAll("#adminPrice")];
      let itemImages = [...document.querySelectorAll("#adminImage")];
      let newName = (itemNames[i].innerText = changeName[i].value);
      let newPrice = (itemPrices[i].innerText = changePrice[i].value);
      let newImage = itemImages[i].setAttribute("src", changeImage.value);
      let newerContent = {
        name: newName,
        image: newImage,
        desc: changeDesc[i].value,
        price: newPrice,
      };

      products[i] = newerContent;
      localStorage.setItem("productData", JSON.stringify(products));
      wrapper.innerHTML = "";
      let modal = document.querySelector(".modal-backdrop");
      modal.style.display = "none";
      displayData();
    });
  });
}
// REMOVE BUTTON FOR ADMIN PAGE

function removeThingy() {
  const deleteButton = [...document.querySelectorAll("#remove")];
  deleteButton.forEach((nah, i) => {
    nah.addEventListener("click", (e) => {
      let row = e.target.parentElement.parentElement;
      row.remove();
      let i = deleteButton.indexOf(event.target);
      products.splice(i, 1);
      localStorage.setItem("productData", JSON.stringify(products));
      wrapper.innerHTML = "";
      displayData();
    });
  });
}

const sortButton = document.querySelector('#sortProduct')

function sort(){
  sortButton.addEventListener('click',()=>{
    products.sort((a, b) => {
      if(a.name < b.name){
          return -1
      } else if(a.name > b.name){
          return 1
      } return 0
  })

  wrapper.innerHTML = ''
  displayData()
})
}

sort()


localStorage.setItem("productData", JSON.stringify(products));
