let currentUserDB= JSON.parse(localStorage.getItem("currentUser"))

document.getElementById("mensajeb").innerText = ` Welcome  ${currentUserDB.user}`

document.getElementById("mensajerror").innerText = ` the user does not exist  , pls sign up ! ` 