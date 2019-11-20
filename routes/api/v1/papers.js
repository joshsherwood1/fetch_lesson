var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);
const fetch = require('node-fetch');


router.get('/', (request, response) => {
  // console.log("hello")
  fetch("https://hedgehog-party.herokuapp.com/api/v1/invites")
  .then(response => response.json())
  // displays results
  .then(result => console.log(result))
});

// router.post('/', (request, response) => {
//   body = JSON.stringify(request.body)
//   // look up content type of body:body...
//   console.log(body)
//   fetch("https://hedgehog-party.herokuapp.com/api/v1/invites", { method: 'POST', body: body })
//     .then(request => request.json())
//     .then(json => console.log(json));
// });



router.post('/', (request, response) => {
  // console.log(request.body)
  body = JSON.stringify(request.body)

  const options = {
    method: 'POST',
    body: body,
    headers: {'Content-Type': 'application/json'}
  }

  // look up content type of body:body...
  // console.log(body)
  fetch("https://hedgehog-party.herokuapp.com/api/v1/invites", options)
    .then(response => response.json())
    .then(json => json)
    .then(response.send())

  // response.send stops request....
}); 

module.exports = router;
