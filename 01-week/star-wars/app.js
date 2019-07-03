// Excellent fetch resource: https://css-tricks.com/using-fetch/

// the id we want to fetch
const id = 2

// creates a variable that holds the element we want to use later
const displayData = document.getElementById('displayData')

// onClick function on <button> element in HTML
const getCharacter = () => {
	fetch(`https://swapi.co/api/people/${id}/`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(response => {
            response.json()
        .then(data => {
            console.log(data)
            displayData.innerHTML = data.name
        }).catch(error => console.log('We have a problem: ', error));
    });
}