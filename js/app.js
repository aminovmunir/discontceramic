function openProductCard() {
    document.getElementById('product-card').style.display = 'flex'
}

function closeProductCard() {
    document.getElementById('product-card').style.display = 'none'
}


function showContact(){
    document.querySelector('.contact').classList.remove('hidden')
}

function closeContact(e){
    if (event.target.classList.contains('contact')) {
        event.target.classList.add('hidden')
    }
}

function closeMenu() {
    if (event.target.classList.contains('menu')) {
        event.target.classList.add('hidden')
    }
}


document.body.addEventListener('click', (e)=>{
    if(e.target.classList.contains('order-btn')){
        document.getElementById('order-form').classList.remove('hidden')    
    }
})


