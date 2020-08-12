const mapboxgl = require('mapbox-gl')
const newMarker = (markerType,long,lat) => {
    const marker = document.createElement('div');
    marker.style.width = "32px";
    marker.style.height = "39px";
    // marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    let url = "url(http://i.imgur.com/WbMOfMl.png)"
    if (markerType === "hotel"){
        url  = 'url(https://i.imgur.com/D9574Cu.png)'
    } else if (markerType === "restaurant") {
        url  = 'url(http://i.imgur.com/cqR6pUI.png)'
    }
    marker.style.backgroundImage = url;
    new mapboxgl.Marker(marker).setLngLat([long,lat]).addTo(map);
}

module.exports = newMarker;