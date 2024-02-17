//click image event
let productCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll(".card");

for(let i=0; i<cards.length; i++){
    const card = cards[i];
    
    card.addEventListener('click', function(){
        //get produce title and price
        const productTitle = card.querySelector('p').innerText;
        const price = parseFloat(card.querySelector('span').innerText);      


        //add clicked products on side-menu
        const clickedProductsList = document.getElementById('clicked-products-list');
        const p = document.createElement('p');
        p.innerText = productCount + '. ' + productTitle;
        clickedProductsList.appendChild(p);
        productCount++;


        //calculate total price
        totalPrice += price;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);


        
        
    })
    
}
const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function() {
    
    //get input value
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    
    //calculate discount
    if(totalPrice >= 200){
        if(couponCode === 'SELL200'){
            const discountElement = document.getElementById('discount-price');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            //price after discount
            const discountedPrice = document.getElementById('discounted-total');
            discountedPrice.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById('input-field').value = '';
        }else{
           alert('Invalid Coupon Code!'); 
           document.getElementById('input-field').value = '';
        }
    }else{
        alert('Please purchase at least 200tk worth of products to use promo code');
        document.getElementById('input-field').value = '';
    }
})