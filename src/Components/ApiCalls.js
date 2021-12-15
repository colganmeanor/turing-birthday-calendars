
const fetchBirthdays = () => {
    return fetch('http://localhost:3001/api/v1/birthdays')
            .then((response) => response.json())
            // .then((data) => console.log(data))
}

export default fetchBirthdays