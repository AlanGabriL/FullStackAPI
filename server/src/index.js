const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const app = express();
const Routes = require('./routes/index.routes');

sequelize.sync().then(() => console.log('Connection with database is great'));

app.use(express.json());

app.use(cors());

app.use('/api/products', Routes);

app.listen(3000, () => {
  console.log('server started');
});
