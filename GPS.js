
Create GpsTracker.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const GpsTracker = () => {
    const [gpsData, setGpsData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios.get("http://127.0.0.1:8000/get-gps/")
                .then(response => setGpsData(response.data))
                .catch(error => console.error("Error fetching GPS data:", error));
        };

        fetchData(); // Fetch immediately
        const interval = setInterval(fetchData, 10000); // Fetch every 10 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h2>GPS Tracker</h2>
            {gpsData ? (
                <div>
                    <p><strong>Vehicle:</strong> {gpsData.vehicleNumber}</p>
                    <p><strong>Latitude:</strong> {gpsData.latitude}</p>
                    <p><strong>Longitude:</strong> {gpsData.longitude}</p>
                    <p><strong>Speed:</strong> {gpsData.speed} km/h</p>
                    <p><strong>Timestamp:</strong> {gpsData.timestamp}</p>
                    <p><strong>Ignition:</strong> {gpsData.ignitionStatus ? "ON" : "OFF"}</p>
                </div>
            ) : (
                <p>Loading GPS data...</p>
            )}
        </div>
    );
};

export default GpsTracker;

Use in App.js

import React from "react";
import GpsTracker from "./GpsTracker";

function App() {
    return (
        <div>
            <h1>Real-Time GPS Data</h1>
            <GpsTracker />
        </div>
    );
}

export default App;

