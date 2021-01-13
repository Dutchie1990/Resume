function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 40.785091,
            lng: -73.968285
        }
    });

    var labels = "ABCDEFGHIJKLMOPQRSTIVWXYZ"

    var locations = [
        {
            lat: 40.785091, lng: -73.968285
        },
        {
            lat: 41.084045, lng: -73.874245
        },
        {
            lat: 40.754932, lng: -73.984016
        }
    ];

    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });
}