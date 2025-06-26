// backend/server.js
const express = require('express');
const cors = require('cors');
const tf = require('@tensorflow/tfjs-node');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/predict', async (req, res) => {
  const { input } = req.body;

  // Example logic: dummy prediction
  const length = input.length;
  const result = length > 5 ? 'Long input' : 'Short input';

  // You could do TensorFlow logic here
  // Example: const prediction = await model.predict(tf.tensor(...))

  res.json({ result });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
