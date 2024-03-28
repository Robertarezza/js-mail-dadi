//test
//("Ciao")

//richiamo bottone
const sendBtnElem = document.getElementById("send_btn"); // object | null
console.log(sendBtnElem);


//const userMail= prompt("Qual'è la tua mail?"); //string | null
//console.log(userMail, typeof userMail);

//evento
sendBtnElem.addEventListener("click", function() {

//lista arrey    
const mail = ["pippo@live.it", "peppe@gmail.com", "roberta.rezza@gmail.com"]

//input
const mailInputElem = document.getElementById("user_mail").value; // string
console.log(mailInputElem);


if (isNaN(mailInputElem) === true) {

//ciclo
 for (let i= 0; i < mail.length; i++){
    //console.log(i);
  //condizioni
    if(mailInputElem == mail[i]){
    //stampa
        document.getElementById("msg").innerHTML= "E' autorizzato ad accedere, il sito è in manutenzione";
    }else if (mailInputElem !== mail[i])
    //stampa
    document.getElementById("msg").innerHTML= "Siamo spiacenti, la mail non risulta registrata";
}
} else{
    alert("dati errati")
}
})
