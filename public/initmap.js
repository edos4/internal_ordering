function initMap() {
    var input = document.getElementById('address_input');
    var inputLatlng = document.getElementById("latLong");
    var autocomplete = new google.maps.places.Autocomplete(input);
    var geocoder = new google.maps.Geocoder;
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        var mapContainer = document.getElementById('map');
        mapContainer.style.maxHeight = '150px';
        let latLng = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
        inputLatlng.value = JSON.stringify(latLng);
        var map = new google.maps.Map(mapContainer, {
            zoom: 18,
            center: latLng
        });
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: true,
            title: place.name
        });

        google.maps.event.addListener(marker, 'dragend', function (marker) {
            var latLng = marker.latLng;
            geocoder.geocode({ 'location': latLng }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        var input = document.getElementById('address_input');

                        inputLatlng.value = JSON.stringify(latLng);
                        input.value = results[0].formatted_address;
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        });
    });
}
