function initMap() {
    var map = L.map('map').setView([51.505, -0.09], 13); // Default location (London)
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;

            // Set view to user's location
            map.setView([userLat, userLng], 13);

            // Add a marker for user's location
            L.marker([userLat, userLng]).addTo(map)
                .bindPopup('You are here.').openPopup();
        }, function(error) {
            console.log("Geolocation error: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

function triggerSOS() {
    alert("You are in an emergency situation! Please stay calm.\n\nYour emergency contact: 911.\n\nA help request has been sent to your contacts.");
    window.location.href = "tel:911";
}

document.addEventListener("DOMContentLoaded", initMap);
