let data = JSON.parse(localStorage.getItem('productData')) ? JSON.parse(localStorage.getItem('productData')) : []

console.log(data)

// `<div class="card">
// <img id="productImage" src="https://i.postimg.cc/qR9rPmCZ/Mens-Poker-Skeleton-Hand-Graphics-Street-100-Cotton-Short-Sleeve-T-Shirt-Black-S.png" class="card-img-top" alt="Black Tee">
// <div class="card-body">
//   <h5 class="card-title fw-bold" id="title">Black Cotton T-shirt</h5>
//   <p class="card-text" id="description">Black T-Shirt.</p>
//   <p class="card-text" id="price">R279.99</p>
//   <button type="button" id="addToCart" class="btn btn-info">Add To Cart</button>
// </div>
// </div>`

function displayProducts(){
    let container = document.querySelector('.whyeven')
    data.forEach((gimme,i)=>{
        console.log(gimme)
        container.innerHTML = `
        <div class="card-group mb-3">
        <div class="card">
        <img id="productImage" src="${gimme.image}" class="card-img-top" alt="Black Tee">
        <div class="card-body">
          <h5 class="card-title fw-bold" id="title">${gimme.name}</h5>
          <p class="card-text" id="description">${gimme.desc}</p>
          <p class="card-text" id="price">${gimme.price}</p>
          <button type="button" id="addToCart" class="btn btn-info">Add To Cart</button>
        </div>
        </div>
        </div>`
    })
}
displayProducts()