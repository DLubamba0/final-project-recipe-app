const express = require('express');
const app = express();
app.use(express.json());

// Example home route
app.get('/', (req, res) => {
  res.send('RecipeShare app is running!');
});

// Example recipe route
app.get('/recipes', (req, res) => {
  res.json([{ id: 1, name: 'Spaghetti' }]);
});

// Use the port Cloud Run provides
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
