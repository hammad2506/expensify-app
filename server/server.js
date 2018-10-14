const express = require('express');
const path = require('path');
const app = express();
const PublicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(PublicPath));

app.use((req, res) => {
    res.sendFile(path.join(PublicPath, "index.html"));
})

app.listen(port, () => {
    console.log("server is running on port 3000");
})