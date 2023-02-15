document.getElementById('case-btn-plus').addEventListener('click',function(){

    updateCaseQty(true);
    setTotalPrice ();
    setTotalTax ();

 

})

document.getElementById('case-btn-minus').addEventListener('click',function(){

    updateCaseQty(false);
    setTotalPrice ();
    setTotalTax ();
})