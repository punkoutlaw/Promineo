const ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

fetch(ENDPOINT)
.then(response => response.json())
.then(response => {
	console.log(response[0].rooms[0].name);
});

/* fetch(ENDPOINT)
.then(response => response.json())
.then(response => {
  response.forEach(house => document.write(house.name + '<br>'));
}); */

/* fetch(ENDPOINT, {
  method: 'POST',  // This is the rqst details
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'My Fetch House'
  })
}); */

/* fetch(`${ENDPOINT}/62828c35e5b1170017ce4443`,  {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'My Fetch House',
    rooms: [
      {name: 'Front Room', area: 200},
      {name: 'Kitchen', area: 220}
    ]
  })
}); */