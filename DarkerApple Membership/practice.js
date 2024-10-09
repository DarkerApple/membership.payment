const loreFight = document.getElementById("loreFight")
const customPvP = document.getElementById("cp")
const allMods = document.getElementById("cp")
const visaBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("mastercardBtn")
const paypalBtn = document.getElementById("paypalBtn")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")
const mySubmit = document.getElementById("mySubmit")

mySubmit.onclick = function(){


    if(loreFight.checked){
        subResult.style.color = 'aquamarine'
        subResult.textContent = `You are subcribed to LoreFight Membership!` ;
        paymentType()
    }
    else if(customPvP.checked){
        subResult.style.color = 'aquamarine'
        subResult.textContent = `You are subcribed to customPvP Membership!` ;
        paymentType()
    }
    else if(allMods.checked){
        subResult.style.color = 'aquamarine'
        subResult.textContent = `You are subcribed to allMods Membership!` ;
        paymentType()
    }
    else{
        subResult.style.color = 'red'
        subResult.textContent = `You are not subcribed.` ;
        paymentResult.style.color = 'red'
        paymentResult.textContent = `Please select a plan first.`;
    }


function paymentType() {   if(visaBtn.checked){
        paymentResult.style.color = 'lightgreen'
        paymentResult.textContent = `You are paying with Visa`
        subcribe()
    }
    else if(mastercardBtn.checked){
        paymentResult.style.color = 'lightgreen'
        paymentResult.textContent = `You are paying with MasterCard`
        subcribe()
    }
    else if(paypalBtn.checked){
        paymentResult.style.color = 'lightgreen'
        paymentResult.textContent = `You are paying with PayPal.` 
        subcribe()
    }
    else{
        paymentResult.style.color = 'red'
        paymentResult.textContent = `You must select a payment type.` 
    }
}
}