const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
app.get('/get-data', (req, res) => res.send('GET Method'));
app.post('/post-data', (req, res) => res.send('POST Method'));
app.put('/put-data', (req, res) => res.send('PUT Method'));
app.delete('/delete-data', (req, res) => res.send('DELETE Method'));



app.use(express.json()); // to parse JSON body

// function authMiddleware(req, res, next) {
//   const token = req.headers['authorization'];
//   if (token === '12345') {
//     next();
//   } else {
//     res.status(403).send('Forbidden: Invalid Token');
//   }
// }

// app.post('/data', authMiddleware, (req, res) => {
//   const { name, age } = req.body;
//   res.send(`Received data for ${name}, age ${age}`);
// });

app.listen(3000, () => console.log('Server running on port 3000'));
function bodyTokenMiddleware(req, res, next) {
    const token = req.body.token; // getting token from JSON body
  
    if (token === '12345') {
      next();
    } else {
      res.status(403).send('Forbidden: Invalid Token');
    }
  }


  app.post('/data', express.json(), bodyTokenMiddleware, (req, res) => {
    const { name, age } = req.body;
    res.send(`Hello ${name}, age ${age}`);
  });
  