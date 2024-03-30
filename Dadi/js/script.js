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
        result = 0;
        document.getElementById("msg").innerHTML = "Riprova";
    } else if (numberPc < numberUt) {
        result = 1
        document.getElementById("msg").innerHTML = "Complimenti, hai vinto!!!";
    } else if (numberPc > numberUt) {
        result = 2;
        document.getElementById("msg").innerHTML = "Hai perso, ritenta sarai più fortunato";
    }


    
})