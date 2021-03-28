const express = require('express')
const app = express()
const port = 3000

const reviews = [
  { class: 'cs61b', rating: 9, year: 2020, text: 'fun class' },
  { class: 'ee16a', rating: 5, year: 2019, text: 'difficult but worth' },
  { class: 'espm50ac', rating: 10, year: 2020, text: 'easy and fun' },
  { class: 'cs61b', rating: 4, year: 2018, text: 'not well taught :(' },
];

app.get('/', (req, res) => {
  res.send("Hello from my super special Express server")
})

// create a GET endpoint at "/reviews" that takes a "name" parameter and returns the review object whose class matches the given name
// YOUR CODE HERE

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})