localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : '' || [];

const addToHere = document.querySelector("#irreplacableHeader");

const addButton = document.querySelectorAll("#addToCart");
let buttons = [];
let content = [];
let prices = []

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
    let newContent = [...new Set(content)]

    console.log(newContent)

    localStorage.setItem('data',JSON.stringify(content))

    

    console.log(total.innerText)

    // console.log(price)

    
    // console.log(prices)


    console.log(content)

    content.forEach((e)=>{
      // console.log(e.innerHTML.parentElement)
      
    })
    
    
    
    prices.forEach((pricee)=>{
      console.log(prices)
      console.log(price)
      console.log(price[0])
      console.log(price[1])
      console.log(price[2])
      console.log(price[3])
      for(let i = 0;i < prices.length;i++){
        console.log(i)
      }
      let newPrice = parseFloat(price.replace('R', ''))
      console.log(newPrice)
      const total = document.getElementById('total')
      total.addEventListener('change',()=>{
        content.forEach((e)=>{
          console.log(e)
          total.innerText = 'Total: ' + newPrice
        })
        
      })
    })
    

    // total.innerText = "Total: " + newPrice

    // console.log(typeof newPrice)


    addToHere.innerHTML = "";
    addToHere.innerHTML += newContent;
    content = []
    content = [...new Set(content)]

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

console.log(price)

prices.push(price)


// const removeButton = document.getElementById('remove')

// console.log(removeButton)

// removeButton.addEventListener('click',(e)=>{
//   console.log(e.target)
// })