/*VARIAVEIS DO NOSSO CODIGO */

/*FUNÇÃO DO MEU CODIGO */
function submit() {
    
    let firstnameValue = document.getElementById("firstnameValue").value;
    let lastnameValue = document.getElementById("lastnameValue").value;
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname")

    console.log(`ola ${firstnameValue} ${lastnameValue}`); 
    firstname.innerHTML = "ola"+" "+ firstnameValue +" ";
    lastname.innerHTML = lastnameValue;
}

function erase(){

    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname")

    console.log("Apagando valores");
    firstname.innerHTML = "";
    lastname.innerHTML = "";
}