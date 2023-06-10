localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : '' || [];

const addToHere = document.querySelector("#irreplacableHeader");

const addButton = document.querySelectorAll("#addToCart");
let buttons = [];
let content = [];

addButton.forEach((data) => {
  console.log(data);
  data.addEventListener("click", (e) => {
    let target = e.target;
    let cart = addToHere.getElementsByTagName("cartDiv");
    let data = target.parentElement;
    let imageTag = data.parentElement.firstChild.nextElementSibling;
    let source = imageTag.getAttribute("src");
    let test = data.firstChild.nextElementSibling;
    let price = test.nextElementSibling.nextElementSibling.innerText;
    let title = data.firstChild.nextElementSibling.innerText;
    let addToDiv = (addToHere.innerHTML += `
        <div class="row d-flex justify-content-between" id="irreplacableHeader">
        <div class="col fw-bold" id="itemm">${title}</div>
        <div class="col fw-bold" id="itemm"><img id="smolImage" src="${source}"></img></div>
        <div class="col fw-bold" id="itemm">${price}</div>
        <div class="col fw-bold d-flex align-items-center justify-content-center" id="actions">
        <input type="number" class="m-2" value="1" name="quantity" id="quantityy">
        <button id="remove">Remove</button>
                </div>
      </div>
        `);
    content.push(addToDiv);

    localStorage.setItem('data',JSON.stringify(content))

    addToHere.innerHTML = "";
    addToHere.innerHTML += content;

    // if (content.includes(addToHere.innerHTML)) {
    //   alert("YOU HAVE ALREADY ADDED THIS TO CART");
    // }

    // console.log(content);
    content = [];
    // console.log(content);
    // console.log(addToDiv);
    // addToHere.appendChild(addToDiv);
    buttons = [];
    
  });
});


const removeButton = document.getElementById('remove')

console.log(removeButton)

// removeButton.addEventListener('click',(e)=>{
//   console.log(e.target)
// })