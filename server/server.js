const express = require('express');

const { sequelize } = require('./models/Company');

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on localhost:${PORT}`);
    });
});