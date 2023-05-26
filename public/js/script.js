let form = document.getElementById('form1')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    weatherFunction()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const latitudeF = document.getElementById('latitude')
const longitudeF = document.getElementById('longitude')
let weatherFunction = async () => {
    try {
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address=' + address)
        console.log(res)
        const data = await res.json()
        console.log(data)
        if (data.error) {
            errorF.innerText = data.error
            locationF.innerText = ''
            forecastF.innerText = ''
            latitudeF.innerText = ''
            longitudeF.innerText = ''
        } else {
            locationF.innerHTML = data.address
            setTimeout(function () {
                forecastF.innerText = data.forecast;
            }, 1000);

            setTimeout(function () {
                latitudeF.innerText = data.latitude;
            }, 2000);

            setTimeout(function () {
                longitudeF.innerText = data.longitude;
            }, 3000);
            errorF.innerText = ''
        }
    }
    catch (e) {
        console.log(e)
    }
}