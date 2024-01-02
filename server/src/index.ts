import express, { Request, Response } from 'express';
import router from '../controllers/index'
import sequelize from '../config/connection';
import cors from 'cors';

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();

// app.use(express.json)
app.use(cors());

// // connect routes
app.use(router);

// // Change 'public' to 'build' for production env. 
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });



sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening to http://localhost:${PORT}/`);
    });
  })
  .catch((err: any) => {
    console.error(err);
    process.exit(1);
  });


