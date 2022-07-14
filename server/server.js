const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const { sequelize } = require('./models/Company');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on localhost:${PORT}`);
    });
});