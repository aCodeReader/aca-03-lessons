// the id we want to fetch
const id = 2

// creates a variable that holds the element we want to use later
const displayData = document.getElementById('displayData')

// a function we can call. We're calling it on the button click here.
const getCharacter = () => {
	fetch(`https://swapi.co/api/people/${id}/?format=json`)
    .then(response => {
            response.json()
        .then(data => {
            console.log(data)
            displayData.innerHTML = data.name
        });
    });
}