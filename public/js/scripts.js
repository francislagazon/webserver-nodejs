(function() {
    
    document.getElementById("page").style.color = "#f00";

    let firstName = "Francis";
    let getUser = (firstName) => {
        document.getElementById("user").innerHTML = firstName;
    }

    getUser(firstName);
 
let valNUmber;

let getNumber = (valNUmber) => {
     return new Promise((resolve, reject) => {
         if(valNUmber === 5) {
             resolve("RESOLVE");
         } else {
             reject("REJECT");
         }
     })
}

getNumber(5)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
})()



