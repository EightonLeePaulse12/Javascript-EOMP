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
        console.log(data.firstChild.nextElementSibling.textContent)
        let title = data.nextSibling.innerText
        console.log(target.parentElement.parentElement)
        let addToDiv = addToHere.innerHTML += `
        <div class="row d-flex justify-content-between" id="irreplacableHeader">
        <div class="col fw-bold" id="itemm">Title</div>
        <div class="col fw-bold" id="itemm">Image</div>
        <div class="col fw-bold" id="itemm">Price</div>
        <div class="col fw-bold" id="itemm">Actions</div>
      </div>
        `
        content.push(addToDiv)
        console.log(addToDiv)
        addToHere.appendChild(addToDiv)


        buttons = []
    })
})

// function addToTheCart(event){
//     let target = event.target
//     console.log(target)
// }