let data = JSON.parse(localStorage.getItem("productData"))
  ? JSON.parse(localStorage.getItem("productData"))
  : [];

  // localStorage.setItem('cart',JSON.stringify(cartItems))
JSON.parse(localStorage.getItem('cart'))

console.log(data);



const backdropIssue = document.querySelector('#backdropIssue')

backdropIssue.addEventListener('click',()=>{
  try{
    const backdropProblem = document.querySelector('.modal-backdrop')
    backdropProblem.style.display = 'none'
  } catch(e){
    alert(e)
  } finally{
    const backdropProblem = document.querySelector('.modal-backdrop')
    backdropProblem.style.display = 'none'
  }
})


// `<div class="card">
// <img id="productImage" src="https://i.postimg.cc/qR9rPmCZ/Mens-Poker-Skeleton-Hand-Graphics-Street-100-Cotton-Short-Sleeve-T-Shirt-Black-S.png" class="card-img-top" alt="Black Tee">
// <div class="card-body">
//   <h5 class="card-title fw-bold" id="title">Black Cotton T-shirt</h5>
//   <p class="card-text" id="description">Black T-Shirt.</p>
//   <p class="card-text" id="price">R279.99</p>
//   <button type="button" id="addToCart" class="btn btn-info">Add To Cart</button>
// </div>
// </div>`

function displayProducts() {
  let container = document.querySelector("#container2");
  data.forEach((gimme, i) => {
    // console.log(i)
    console.log(gimme);
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
addToCart()

let cartItems = []


function addToCart() {
  const cartButton = [...document.querySelectorAll('#addToCart')]
  const body = document.querySelector('#modalBody')
  console.log(cartButton)
  cartButton.forEach((buton,i)=>{
    buton.addEventListener('click',(e)=>{
      console.log(e.target)
      body.innerHTML = ''
      const cardBody = e.target.parentElement
      console.log(cardBody)
      const titlee = cardBody.firstElementChild
      const descc = cardBody.firstElementChild.nextElementSibling
      const img = cardBody.parentElement.firstChild.nextSibling.getAttribute('src')
      console.log(img)
      const price = cardBody.firstElementChild.nextElementSibling.nextElementSibling
      let product = {
        name:titlee.innerText,
        image:img,
        desc:descc.innerText,
        price:price.innerText
      }
      cartItems.push(product)
      localStorage.setItem('cart',JSON.stringify(cartItems))
      console.log(cartItems)
      cartItems = [...new Set(cartItems)]
      cartItems.forEach((luffy,i)=>{
        // console.log(addHere)
        // console.log(putHere)
        let newData = `
        <div class="row">
        <div class="col d-flex align-items-center justify-content-between" id="cartTitle">${luffy.name}</div>
        <div class="col d-flex align-items-center justify-content-between" id="cartImage"><img id="myPic" src="${luffy.image}"></div>
        <div class="col d-flex align-items-center justify-content-between" id="cartPrice">${luffy.price}</div>
        <div class="col d-flex align-items-center justify-content-between" id="actions">
        <input type="number" name="cartQuantity" value="1" id="cartQuantity">
        <button class="btn-danger" id="remove">Remove</button>
        </div>
      </div>
        `
        let putHere = document.querySelector('#modalBody')
        // const boddas = document.querySelector('#modalBody')
        let addHere = document.querySelector('#exampleModal')
        console.log(addHere)
        putHere.innerHTML += newData
        // if(addHere.style.display == 'block'){
        //   console.log("NOTHING IS HAPPENING")
        // } 
        //   // DO NOTHING
        // }

        console.log(addHere)
        updateTotal()
      })
    })
  })
}


function updateTotal(){
  const modalBody = document.querySelector('#modalBody')
  if(modalBody.textContent.trim().length === 0){
    console.log("THE DIV IS EMPTYYY")
    const total = document.querySelector('.yesss')
    total.innerHTML = "Total: R0.00"
  } else{
    console.log("THERE IS CONTENT HERE")
    const total = document.querySelector('.yesss')
    let hiThere = JSON.parse(localStorage.getItem('cart'))
    // hiThere.forEach((data)=>{
    //   let price = data.price
    //   price = price.replace('R','')
    //   price = Number(price)
    //   console.log(data++)
    //   console.log(typeof price)
    //   total.innerHTML = "Total: " + data.price
    // })
    let sum = 0

    hiThere.forEach(function(e){
      let price = e.price
      price = price.replace("R","")
      price = Number(price)
      let newSum = sum += e
      total.innerHTML = "Total: " + newSum 
    })

    // total.innerHTML hiThere.price
  }
}
// function addToCart(productId) {
//   const product = productData.find((product) => product.id === productId)
//   if(product){
//     data.push(product)
    
//   }
// }

localStorage.setItem('cart',JSON.stringify(cartItems))