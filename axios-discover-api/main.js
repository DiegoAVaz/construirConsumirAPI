const url = "http://localhost:5500/api"

// GET
function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

// POST
function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

// GET once
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

// PUT
function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

// DELETE
function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}


const userUpdated = {
    name: "Fabio Cupertino",
    avatar: "https://picsum.photos/200/300",
    city: "Vicosa"
}
const newUser = {
    name: "Fernanda",
    avatar: "https://picsum.photos/200/300",
    city: "Osasco"
}

deleteUser(8)
getUsers()
// addNewUser(newUser)
getUser(2)
// updateUser(9, userUpdated)