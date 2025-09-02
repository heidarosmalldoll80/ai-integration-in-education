const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API Endpunkte
app.get('/api/students', (req, res) => {
    // Hier würden Sie die Logik zur Rückgabe der Schülerdaten implementieren
    res.send([]);
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
