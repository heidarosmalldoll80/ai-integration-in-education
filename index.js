const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!', error: err.message });
});

// API Endpoints
app.get('/api/students', (req, res) => {
    // Here you would implement the logic to return the student data
    res.status(200).send({ message: 'Student data retrieved successfully', data: [] });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});