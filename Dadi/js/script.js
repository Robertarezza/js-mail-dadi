//test
//alert("ciao")


const sendBtnElem = document.getElementById("btn-utente"); // object | null
console.log(sendBtnElem);


sendBtnElem.addEventListener("click", function () {

    const numberPc = Math.floor(Math.random() * 6) + 1; //number
    console.log(numberPc, typeof numberPc);
    document.getElementById("num-pc").innerHTML = `Questo è il numero del pc :  ${numberPc}`;

    const numberUt = Math.floor(Math.random() * 6) + 1; //number
    console.log(numberUt, typeof numberUt);
    document.getElementById("num-utente").innerHTML = `Questo è il tuo numero :  ${numberUt}`;

    let result = "";
    if (numberPc == numberUt) {
        result = "riprova";
       
    } else if (numberPc < numberUt) {
        result = "hai vinto"
        
    } else if (numberPc > numberUt) {
        result = "hai perso";
        
    }

    document.getElementById("msg").innerHTML = result;
})