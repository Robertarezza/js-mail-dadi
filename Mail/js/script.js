//test
//("Ciao")

//richiamo bottone
const sendBtnElem = document.getElementById("send_btn"); // object | null
console.log(sendBtnElem);


//const userMail= prompt("Qual'è la tua mail?"); //string | null
//console.log(userMail, typeof userMail);


//array
const mail = ["pippo@live.it", "peppe@gmail.com", "roberta.rezza@gmail.com"]


//evento
sendBtnElem.addEventListener("click", function () {




    //input
    const mailInputElem = document.getElementById("user_mail").value; // string
    console.log(mailInputElem);

let trovato= false

    if (isNaN(mailInputElem) === true) {

        //ciclo
        for (let i = 0; i <= mail.length; i++) {
            //console.log(i);
            //condizioni
            if (mailInputElem == mail[i]) {
                trovato = true
                //stampa 
            }
        }
        
        if(trovato == true){
            document.getElementById("msg").innerHTML = "E' autorizzato ad accedere, il sito è in manutenzione";
        }else {
            document.getElementById("msg").innerHTML = "Non autorizzato";
        }
        
    } else {
        alert("dati errati")
    }


})

//leggo ad uno ad uno tutta la lista
    //se il nome che sto leggendo è uguale, lo ricordo 

//se è presente il nome nella lista 
    //lo faccio entrare
//altrimenti
    //non lo faccio entrare

    //facciamo diventare vera la condizione del for, quando ci serve