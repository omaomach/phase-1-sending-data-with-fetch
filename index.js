const userDiv = document.getElementById('userDiv');
console.log(userDiv)

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(response => response.json())
    .then(user => {
        userDiv.innerHTML = `
        <h2>User ID</h2>
        ${user.id}
        `
        
    })
    .catch((error) => {
        userDiv.append(error.message);
    })
}

submitData('steve', 'steve@steve.com')


// {o_<} //