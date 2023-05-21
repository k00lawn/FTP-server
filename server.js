const express = require("express");
const serveIndex = require("serve-index");
const PORT = process.env.PORT;


const app = express();

if (!PORT) {
    throw new Error("PORT variable not defined");
}

app.get("/home", (req, res) => {
    const data = `App running at PORT ${PORT}`;
    return res.send(data);
});

app.use('/ftp', express.static('public/ftp'), serveIndex('public/ftp', {'icons': true}))

app.listen(PORT, "0.0.0.0", () => console.log(`Server at ${PORT}`));

