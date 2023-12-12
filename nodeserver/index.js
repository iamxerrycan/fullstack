const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

let students = [
  { id: 1, name: 'Alice', grade: 'A' },
  { id: 2, name: 'Bob', grade: 'B' },
  { id: 3, name: 'Charlie', grade: 'C' }
];

app.get('/', (req, res) => {
  res.send(students);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
uy