require('dotenv').config();
const app = require('./app.js');

// importing PORT from dotenv file
const PORT = parseInt(process.env.PORT) || 5000;

// Starting server
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});