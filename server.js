const express = require('express');
const helmet = require('helmet');
const recipesRouter = require('./recipes/recipes-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', recipesRouter)

server.get('/', (req, res) => {
  
    res.status(200).json({message: `Welcome to the API build by Royer Adames`});
  
});



module.exports = server;
