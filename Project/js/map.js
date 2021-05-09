// from leafletjs.com
function initMap() {
    var map = L.map('mapid').setView([46.80860900878906, -114.05963134765625], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([46.80860900878906, -114.05963134765625]).addTo(map)
        .bindPopup('<p>The Fashion Pet</p>')
        .openPopup();
}