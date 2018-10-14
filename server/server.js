const express = require('express');
const path = require('path');
const app = express();
const PublicPath = path.join(__dirname, '..', 'public');

app.use(express.static(PublicPath));

app.use((req, res) => {
    res.sendFile(path.join(PublicPath, "index.html"));
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})