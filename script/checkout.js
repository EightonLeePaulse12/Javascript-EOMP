let cart = JSON.parse(localStorage.getItem('cart'))

const goBackButton = document.querySelector('#bak')

goBackButton.addEventListener('click',()=>{
    cart = []
})