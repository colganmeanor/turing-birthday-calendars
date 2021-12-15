
const fetchBirthdays = () => {
    return fetch('http://localhost:3001/api/v1/birthdays')
            .then((response) => response.json())
            // .then((data) => console.log(data))
}

const postBirthdays = (data) => {
    fetch('http://localhost:3001/api/v1/birthdays', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }) 
}

const deleteBirthdays = (id) => {
    fetch(`http://localhost:3001/api/v1/birthdays/${id}`, {
        method: 'DELETE'
    })
}

module.exports ={
 fetchBirthdays,
 postBirthdays,
 deleteBirthdays
}
    