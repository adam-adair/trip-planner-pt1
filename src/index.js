const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiamFtaWxrYWJpciIsImEiOiJja2Rxbml5Y2EwaG5xMnJteXVvZHJkMm5zIn0._zxdnZcMGmIUw0SH9R2OKg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const marker = document.createElement('div');
// marker.style.width = "32px";
// marker.style.height = "39px";
// marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
const buildMarker = require("./marker");

const marker = buildMarker("restaurant", -74.009151, 40.705086); // or [-87.6354, 41.8885]
marker.addTo(map);
