const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, firstName: "Alex", lastName: "Mills"},
        {id: 2, firstName: "Test", lastName: "McTestface"},
        {id: 3, firstName: "firstName", lastName: "lastName"}
    ];

    res.json(users);
});

const port = 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
