let currentUserDB= JSON.parse(localStorage.getItem("currentUser"))

if (currentUserDB.user){
    document.getElementById("mensajeb").innerText = ` Welcome  ${currentUserDB.user}`
    //deleteErrors()
}


/* document.getElementById("mensajerror").innerText = ` the user does not exist  , pls sign up ! `  */