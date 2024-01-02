import express from 'express';
import path from 'path';
import router from 'express';
import sequelize from '../config/connection';
import http from 'http'
import cors from 'cors';

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json)
app.use(cors());

// connect routes
app.use(router);

// Change 'public' to 'build' for production env. 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = http.createServer(app);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error(err);
    process.exit(1);
  });


