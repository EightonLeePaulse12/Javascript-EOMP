// localStorage.getItem("data")
/*   ? JSON.parse(localStorage.getItem("data")) */
//   : "" || [];
// const addToHere = document.querySelector("#irreplacableHeader");
// const addButton = document.querySelectorAll("#addToCart");
// let buttons = [];
// let content = [];
// let prices = [];
// let pricess = [];

// addButton.forEach((data)=>{
//   console.log(data)
//   data.addEventListener('click', addToCart)
// })

// const removeButton = (e) => {
//   let button = [...document.querySelectorAll('.remove')]
//   for (let i = 0; i < button.length;i++){
//     console.log(i)
//     console.log(button[i])
//   }
//   // button.splice(parseInt(button.indexOf(e.target)),1)
  
  
//   // button.parentElement.parentElement.remove()
// }
// let removeIt = [...document.querySelectorAll('.remove')]

// removeIt.forEach((yes)=>{
//   removeButton()
//   console.log(yes)
// })

// function addToCart(e){
//   let target = e.target;
//     let cart = addToHere.getElementsByTagName("cartDiv");
//     let data = target.parentElement;
//     let imageTag = data.parentElement.firstChild.nextElementSibling;
//     let source = imageTag.getAttribute("src");
//     let test = data.firstChild.nextElementSibling;
//     let price = test.nextElementSibling.nextElementSibling.innerText;
//     let title = data.firstChild.nextElementSibling.innerText;
//     let addToDiv = `
//         <div class="row d-flex justify-content-between" id="irreplacableHeader">
//         <div class="col fw-bold" id="itemm">${title}</div>
//         <div class="col fw-bold" id="itemm"><img id="smolImage" src="${source}"></img></div>
//         <div class="col fw-bold" id="itemm">${price}</div>
//         <div class="col fw-bold d-flex align-items-center justify-content-center" id="actions">
//         <input type="number" class="m-2" value="1" name="quantity" id="quantityy">
//         <button onclick="removeButton()" class="remove">Remove</button>
//                 </div>
//       </div>
//         `;
//     content.push(addToDiv);
//     content = [...new Set(content)];
//     console.log(content)
//     content.forEach((data)=>{
//       console.log(data)
//       addToHere.innerHTML += addToDiv
//     })
//     // console.log(newContent);
//     localStorage.setItem("data", JSON.stringify(content));
//     // console.log(total.innerText);
//     // console.log(content);
// }

// Create a display function that will display data to the admin page's table
// 


// addButton.forEach((data) => {
//   // console.log(data);
//  data.addEventListener("click", async (e) => {
//     let target = e.target;
//     let cart = addToHere.getElementsByTagName("cartDiv");
//     let data = target.parentElement;
//     let imageTag = data.parentElement.firstChild.nextElementSibling;
//     let source = imageTag.getAttribute("src");
//     let test = data.firstChild.nextElementSibling;
//     let price = test.nextElementSibling.nextElementSibling.innerText;
//     let title = data.firstChild.nextElementSibling.innerText;
//     let addToDiv = (addToHere.innerHTML += `
//         <div class="row d-flex justify-content-between" id="irreplacableHeader">
//         <div class="col fw-bold" id="itemm">${title}</div>
//         <div class="col fw-bold" id="itemm"><img id="smolImage" src="${source}"></img></div>
//         <div class="col fw-bold" id="itemm">${price}</div>
//         <div class="col fw-bold d-flex align-items-center justify-content-center" id="actions">
//         <input type="number" class="m-2" value="1" name="quantity" id="quantityy">
//         <button class="remove">Remove</button>
//                 </div>
//       </div>
//         `);
//     content.push(addToDiv);
//     content = [...new Set(content)];
//     // console.log(newContent);
//     localStorage.setItem("data", JSON.stringify(content));
//     console.log(total.innerText);
//     console.log(content);

//     // for (let i = 0; i < removeButton.length;i++){
//     //   console.log(i)
//     //   let myButton = removeButton[i]
//     //   myButton.addEventListener('click',(e)=>{
//     //     console.log(e.target)
//     //     console.log("THIS WORKS")
//     //   })
//     // }
//     // console.log(removeButton)
//     // removeButton.addEventListener('click',(e)=>{
//     //   console.log("REACHED")
//     //   console.log(e.target)
//     // })

//     // removeButton.addEventListener('click', removeMe)


//     // content.forEach((e)=>{
//     //   // console.log(e.innerHTML.parentElement)
//     // })
//     prices.forEach((pricee) => {
//       console.log(prices);
//       console.log(pricee);
//       for (let i = 0; i < pricee.length; i++) {
//         console.log(pricee[i]);
//         console.log(price);
//         const total = document.getElementById("total");
//         let newPrice = parseFloat(price.replace("R", ""));
//         pricess.push(newPrice);
//         pricess = [...new Set(pricess)];
//         console.log(pricess);
//         let sum = 0;
        
//         for (let i = 0; i < pricess.length; i++) {
//           sum += pricess[i];
//           console.log(sum);
//           total.innerHTML = "Total: " + "R" + sum;
//           // sum = sum * e.value 
//           let quantity = addToHere.querySelectorAll('#quantityy')[0]
//           console.log(quantity)
//           console.log(quantity.value)
//           let newValue = quantity.value
//           quantity.addEventListener('change',()=>{
//             console.log("CHANGED ?")
//           })
//           quantity.addEventListener('change',()=>{
//             console.log("YOU CHANGED ME!!!!!!!1")
//           })
          
//           // quantity.forEach((e)=>{
//           //   console.log(e)
//           //   console.log(e.value)
//           //   
//           //   
//           //   e.addEventListener('change',()=>{
//           //     console.log("HELLO")
//           //   })
//           // })
//         }
//         console.log(pricess);
//         console.log(newPrice);
//       }

 
//     });

//     addToHere.innerHTML = "";
//     addToHere.innerHTML += content;
//     content = [];
//     content = [...new Set(content)];
//     content = [];
//     buttons = [];
//   });
  
//   // const removeButtons = [...addToHere.querySelectorAll('.remove')]
//   //   removeButtons.forEach( (button, i)=>{
//   //     button.addEventListener('click', ( )=>{
//   //       alert(`Button delete position ${i}`)
//   //     })
//   //   } )
// });


// console.log(price);
// prices.push(price);
// console.log(price);






  // function removeMe(event){
  //   console.log(event.target)
  // }

// removeMe()

let empty = []

let wrapper = document.querySelector('#products')

let products = [
{
  name: "Black Cotton T-shirt",
  image: "https://i.postimg.cc/qR9rPmCZ/Mens-Poker-Skeleton-Hand-Graphics-Street-100-Cotton-Short-Sleeve-T-Shirt-Black-S.png",
  price:"R279.99"
},
{
  name:"White Cotton hoodie",
  image:"https://i.postimg.cc/k4WY5wpH/Drop-Shoulder-Hoodie-with-Slit-Beige-2-XL.jpg",
  price:"R949.99"
},
{
  name:"Black Sleeveless Puffer Jacket",
  image:"https://i.postimg.cc/0yqQMNjH/Chalecos-acolchados-con-capucha-y-sin-mangas-de-color-s-lido-con-bolsillo-y-cremallera-de-color-s-li.png",
  price:"R449.99"
},
{
  name:"Black BOSS Tracksuit Pants",
  image:"https://i.postimg.cc/MZ5nPBGy/BOSS-Men-s-Tracksuit-Pants-Black.jpg",
  price:"R379.99"
},
{
  name:"Hoodied Jersey",
  image:"https://i.postimg.cc/gJPPnjGk/Plaid-Button-Front-Brushed-Hooded-Jacket-Purple-2-XL.jpg",
  price:"R749.99"
},
{
  name:"Light grey shorts",
  image:"https://i.postimg.cc/Jz1DB74x/Waist-Tie-Active-Shorts-Blue-12.jpg",
  price:"R467.99"
}
]

function displayData() {
  wrapper.innerHTML = ""
  products.forEach( (product)=>{
    wrapper.innerHTML += `
      <tr>
       <th scope="row">${product.name}</th>
       <td><img id="adminImage" src="${product.image}"></td>
       <td>${product.price}</td>
       <td>
         <button id="edit">Edit</button>
         <button id="remove" onclick="deleteItem(${product})">Remove</button>
       </td>
     </tr>
    `
  })
}
displayData()
// let content = `<table class="table">
// <thead>
//   <tr>
//     <th scope="col">Product</th>
//     <th scope="col">Image</th>
//     <th scope="col">Price</th>
//     <th scope="col"><button id="add">Add Product</button></th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <th scope="row">${myStuff[0].name}</th>
//     <td><img id="adminImage" src="${myStuff[0].image}"></td>
//     <td>${myStuff[0].price}</td>
//     <td>
//       <button id="edit">Edit</button>
//       <button id="remove">Remove</button>
//     </td>
//   </tr>
//   <tr>
//     <th scope="row">${myStuff[1].name}</th>
//     <td><img id="adminImage" src="${myStuff[1].image}"></td>
//     <td>${myStuff[1].price}</td>
//     <td>
//       <button id="edit">Edit</button>
//       <button id="remove">Remove</button>
//     </td>
//   </tr>
//   <tr>
//     <th scope="row">${myStuff[2].name}</th>
//     <td><img id="adminImage" src="${myStuff[2].image}"></td>
//     <td>${myStuff[2].price}</td>
//     <td>
//       <button id="edit">Edit</button>
//       <button id="remove">Remove</button>
//     </td>
//   </tr>
//   <tr>
//     <th scope="row">${myStuff[3].name}</th>
//     <td><img id="adminImage" src="${myStuff[3].image}"></td>
//     <td>${myStuff[3].price}</td>
//     <td>
//       <button id="edit">Edit</button>
//       <button id="remove">Remove</button>
//     </td>
//   </tr>
//   <tr>
//     <th scope="row">${myStuff[4].name}</th>
//     <td><img id="adminImage" src="${myStuff[4].image}"></td>
//     <td>${myStuff[4].price}</td>
//     <td>
//       <button id="edit">Edit</button>
//       <button id="remove">Remove</button>
//     </td>
//   </tr>
//   <tr>
//     <th scope="row">${myStuff[5].name}</th>
//     <td><img id="adminImage" src="${myStuff[5].image}"></td>
//     <td>${myStuff[5].price}</td>
//     <td>
//       <button id="edit">Edit</button>
//       <button id="remove">Remove</button>
//     </td>
//   </tr>
// </tbody>
// </table>`

// let addButtons = document.querySelector('#add')

// empty.push(content)

// empty.forEach((para)=>{
//   console.log(para)
//   stuff.innerHTML = para
// })


// const removeButton = document.querySelectorAll('#remove')
// function removeStuff(){

// displayData()
// }

function deleteItem(item) {
  let index = products.findIndex( p =>{
    return p.id == item.id
  })
  products.splice(index, 1)
}