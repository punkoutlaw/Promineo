// We use the "await" keyword on an asynchronouos call to wait for the call to complete before moving on to the the next line:

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses'

const getHouses = async () => {
    const resp = await fetch(HOUSES_ENDPOINT);
    const json = await resp.json();
    console.log(json)
}

getHouses();