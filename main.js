function initMap() {
    let options = {
        zoom: 10,
        center: {
            lat: 23.8103,
            lng: -90.4125
        }
    }
    let map = new google.maps.Map(document.getElementById('map'), options);

    addMarker({
        lat: 23.7465,
        lng: 90.3760
    });

    function addMarker(LatAndLong) {
        let mapsMarker = new google.maps.Marker({
            position: LatAndLong,
            map: map,
            // Custom Icon For Marker
            // icon: 'icon/url'
        });

    }
}