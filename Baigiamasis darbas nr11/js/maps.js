// JavaScript source code
    function myMap() {
            var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
                zoom: 14,
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            var uluru = {lat: 51.507995, lng: -0.102126 };
            var marker = new google.maps.Marker({position: uluru, map: map });
            var uluru2 = {lat: 51.510787, lng: -0.117643 };
            var marker2 = new google.maps.Marker({position: uluru2, map: map });
            var uluru3 = {lat: 51.512981, lng: -0.100362 };
            var marker3 = new google.maps.Marker({position: uluru3, map: map });
            }