function updateQty (isIncrease){
    
    const updateQty = document.getElementById('update-qty');
    const updateQtyString = updateQty.value;
    const newUpdateQty = parseInt(updateQtyString);


    const phonePrice = document.getElementById('phone-price');
    const phonePriceString = phonePrice.innerText;
    const previousPhonePrice =parseInt(phonePriceString);

    let totalUpdatePrice;

    let totalUpdateQty;
    if(isIncrease === true){

        totalUpdateQty = newUpdateQty + 1;
        totalUpdatePrice = totalUpdateQty * 1219;


    }
    else{
        totalUpdateQty = newUpdateQty - 1;
        totalUpdatePrice = totalUpdateQty * 1219;
    }

    updateQty.value = totalUpdateQty;
    phonePrice.innerText = totalUpdatePrice;
    



    // return totalUpdateQty;
}
function updateCaseQty (isIncrease){
    
    const updateQty = document.getElementById('update-case-qty');
    const updateQtyString = updateQty.value;
    const newUpdateQty = parseInt(updateQtyString);


    const phonePrice = document.getElementById('case-price');
    const phonePriceString = phonePrice.innerText;
    const previousPhonePrice =parseInt(phonePriceString);

    

    let totalUpdatePrice;

    let totalUpdateQty;
    if(isIncrease === true){

        totalUpdateQty = newUpdateQty + 1;
        totalUpdatePrice = totalUpdateQty * 59;


    }
    else{
        totalUpdateQty = newUpdateQty - 1;
        totalUpdatePrice = totalUpdateQty * 59;
    }

    updateQty.value = totalUpdateQty;
    phonePrice.innerText = totalUpdatePrice;
    



    // return totalUpdateQty;
}


function getValueById (inputId){

    

    const inputAId = document.getElementById(inputId);
    const inputAIdString = inputAId.innerText;
    const newTotalPrice = parseInt(inputAIdString);
    
    inputAId.innerText = newTotalPrice;
    return newTotalPrice;
}

function setTotalPrice (){

    const phonePrice = getValueById('phone-price');
    const CasePrice = getValueById('case-price');
    const newTotalPrice = CasePrice+ phonePrice;


    const totalPrice = document.getElementById('total-cost');
    totalPrice.innerText =newTotalPrice;

}
function setTotalTax (){
    const phonePrice = getValueById('phone-price');
    const CasePrice = getValueById('case-price');
    const newTotalPrice = (CasePrice + phonePrice) * 0.5;

    const totalTax =  document.getElementById('total-tax');
    totalTax.innerText = newTotalPrice;


}