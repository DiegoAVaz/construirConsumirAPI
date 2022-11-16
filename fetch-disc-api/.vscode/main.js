const url = 'http://localhost:5500/api'


// GET
function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}



// GET once
function getUser(){
    fetch(`${url}/4`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city 
        userAvatar.src = data.avatar 
    })
    .catch(error => console.error(error))
}



// POST
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}



const newUser = {
    name: "Cris",
    avatar: "https://picsum.photos/200/300",
    city: "Rio do Sul"
}



//PUT
function updateUser(updatedUser){
    fetch(`${url}/1`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}



const updatedUser = {
    name: "Fabio",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}


// DELETE
function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}


deleteUser(2)
// addUser(newUser)
// updateUser(updatedUser)
getUsers()
getUser()


