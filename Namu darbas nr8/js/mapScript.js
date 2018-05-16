function myMap() {
    var mapCanvas = document.getElementById("googleMaps");
    var mapOptions = {
        center: new google.maps.LatLng(41.878327, -87.640627),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}