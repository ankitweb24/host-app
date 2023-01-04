const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("codewithaj")
});

app.listen(port, () => {
    console.log(`listring to the port at ${port}`);
})