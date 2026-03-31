const express = require('express');
const cors = require('cors');
const { readRequests, writeRequests } = require('./models'); // Importing our functions
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET all applications
app.get('/api/requests', (req, res) => {
    try {
        const requests = readRequests();
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// POST creating a new request
app.post('/api/requests', (req, res) => {
    try {
        const { name, phone, email, address, subject, message } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required.' });
        }

        const requests = readRequests();

        const newRequest = {
            id: Date.now(),
            name,
            phone: phone || '',
            email: email || '',
            address: address || '',
            subject: subject || '',
            message: message || '',
            status: 'New', // Перекладено статус
            createdAt: new Date().toISOString(),
        };

        requests.push(newRequest);
        writeRequests(requests);

        res.status(201).json({ message: 'Request saved successfully', request: newRequest });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT updating request status
app.put('/api/requests/:id/status', (req, res) => {
    try {
        const id = Number(req.params.id);
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ error: 'Status field is required.' });
        }

        const requests = readRequests();
        const request = requests.find(r => r.id === id);

        if (!request) {
            return res.status(404).json({ error: 'Request not found' });
        }

        request.status = status;
        writeRequests(requests);

        res.json({ message: 'Status updated', request });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE removing a request
app.delete('/api/requests/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        let requests = readRequests();

        const index = requests.findIndex(r => r.id === id);
        if (index === -1) {
            return res.status(404).json({ error: 'Request not found' });
        }

        requests.splice(index, 1);
        writeRequests(requests);

        res.json({ message: 'Request deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});