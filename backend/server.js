
const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/check-news', (req, res) => {
  const { text } = req.body;

  const pythonProcess = spawn('python', ['predict.py', text]);
  let output = '';
  
  pythonProcess.stdout.on('data', (data) => {
    output += data.toString();
  });

  pythonProcess.stderr.on('data', (err) => {
    console.error(`Python error: ${err}`);
  });

  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).json({ error: 'Model execution failed' });
    }
    res.json({ prediction: output.trim() });
  });
});

app.listen(8000, () => console.log('Server running on http://localhost:8000'));
