const addToHere = document.querySelector('#theDiv')

// let arr = [
//     {
//         productTitle: '',
//         img: '',
//         productPrice: '',
//         description:''

//     }
// ]

const addButton = document.querySelectorAll('#addToCart')
let buttons = []
let content = []

addButton.forEach((data)=>{
    console.log(data)
    data.addEventListener('click',(e)=>{
        let target = e.target
        let arrayy = buttons.push(target)
        console.log(buttons)
        console.log(arrayy)
        let cart = addToHere.getElementsByTagName('cartDiv')
        console.log(cart)
        let data = target.parentElement
        console.log(data)
        console.log(data.firstChild.nextElementSibling)
        console.log(data.parentElement.firstChild.nextElementSibling)
        let imageTag = data.parentElement.firstChild.nextElementSibling
        let source = imageTag.getAttribute('src')
        let test = data.firstChild.nextElementSibling
        // console.log(test)
        // console.log(test.nextElementSibling.nextElementSibling)
        let price = test.nextElementSibling.nextElementSibling.innerText
        let title = data.firstChild.nextElementSibling.innerText
        console.log(title)
        console.log(price)
        console.log(target.parentElement.parentElement)
        let addToDiv = addToHere.innerHTML += `
        <div class="row d-flex justify-content-between" id="irreplacableHeader">
        <div class="col fw-bold" id="itemm">${title}</div>
        <div class="col fw-bold" id="itemm"><img id="smolImage" src="${source}"></img></div>
        <div class="col fw-bold" id="itemm">${price}</div>
        <div class="col fw-bold d-flex align-items-center justify-content-center" id="actions">
                  <button class="btn" id="minus">-</button>
                  <h5 id="quantity">1</h5>
                  <button class="btn" id="add">+</button>
                </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col">
          <h6>Total: </h6>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <button id="Checkout" class="btn-danger">Checkout</button>
      </div>
        `
        content.push(addToDiv)
        console.log(addToDiv)
        addToHere.appendChild(addToDiv)


        buttons = []
    })
})

console.log("REACHED")

// function addToTheCart(event){
//     let target = event.target
//     console.log(target)
// }