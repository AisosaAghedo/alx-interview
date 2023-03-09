#!/usr/bin/node

const req = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';

function newPromise (link) {
  return new Promise((resolve) => {
    req.get(link, function (error, res, body) {
      if (error) {
        console.log(error);
      }
      const data = JSON.parse(body);
      resolve(data);
    });
  });
}

async function prom () {
  const characters = await newPromise(url + id);

  for (const character of characters.characters) {
    const name = await newPromise(character);
    console.log(name.name);
  }
}
prom();
