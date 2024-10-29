function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: 43.6045, lng: 1.4442 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 12,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Toulouse , France' // Title Location
    });
}