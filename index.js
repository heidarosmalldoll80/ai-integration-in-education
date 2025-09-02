const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API Endpoints
app.get('/api/students', (req, res) => {
    // Here you would implement the logic to return the student data
    res.status(200).send({ message: 'Student data retrieved successfully', data: [] });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});