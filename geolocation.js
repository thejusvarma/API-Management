const x = document.getElementById('demo');

function getLocation() {
    try 
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
    catch 
    {
        x.innerHTML = err;
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude" + position.coords.latitude + "Longitude" + position.coords.longitude;
}
