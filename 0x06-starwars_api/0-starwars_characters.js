#!/usr/bin/node

const req = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';

function new_promise(link) {
return new Promise((resolve)=>{
req.get(link, function (error, res, body) {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  resolve(data);
});
});
}

async function prom(){
	const characters = await  new_promise(url + id)

	for (let character of characters.characters){
		let name = await new_promise(character)
		console.log(name.name);
	}
}
prom();
