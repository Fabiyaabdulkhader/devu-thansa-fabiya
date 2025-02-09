const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

let emergencyRequests = []; // Temporary storage for SOS requests

// Route to handle SOS alerts
app.post("/sos", (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Location is required" });
    }

    const emergencyData = {
        id: emergencyRequests.length + 1,
        latitude,
        longitude,
        timestamp: new Date(),
    };

    emergencyRequests.push(emergencyData);
    console.log("New SOS Request:", emergencyData);

    res.status(200).json({ message: "SOS request received", emergencyData });
});

// Route to fetch all SOS requests (for future features)
app.get("/sos", (req, res) => {
    res.json(emergencyRequests);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
