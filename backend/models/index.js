const fs = require('fs');
const path = require('path');

// Path to the JSON data file
const dataFilePath = path.join(__dirname, '../data/requests.json');

// Read requests from the file
const readRequests = () => {
    if (!fs.existsSync(dataFilePath)) return [];
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return data ? JSON.parse(data) : [];
};

// Write requests to the file
const writeRequests = (requests) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(requests, null, 2));
};

module.exports = {
    readRequests,
    writeRequests,
};