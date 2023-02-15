
document.getElementById('phone-btn-plus').addEventListener('click',function(){

 updateQty(true);
 setTotalPrice ();
 setTotalTax ();

    
})

document.getElementById('phone-btn-minus').addEventListener('click',function(){

    updateQty(false);
    setTotalPrice ();
    setTotalTax ();
})

