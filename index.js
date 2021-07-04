const express = require('express');
const helmet = require('helmet')

const db = require('./data/dbHelpers.js');

const server = express();

server.use(helmet());
server.use(express.json())

const port = 4000;

// db.findDishes()
//     .then(dish => {
//         // console.log('dish', dish);
//     }).catch(err => {
//         // console.log('issue with dishes', err);
//     })

// db.findRecipes()
//     .then(recipe => {
//         // console.log('recipes', recipe)
//     }).catch(err => {
//         // console.log('issues with recipes', err)
//     })

// db.findIngredients()
//     .then(ingredients => {
//         // console.log('recipes', ingredients)
//     }).catch(err => {
//         // console.log('issues with recipes', err)
//     })


server.get('/api/dishes', async(req,res)=>{
    try {
        const dishes = await db.findDishes();
        res.status(200).json(dishes)
    } catch(error) {
        res.status(500).json(error)
    }
})


server.get('/api/recipes', async(req,res)=>{
    try {
        const recipes = await db.findRecipes();
        res.status(200).json(recipes)
    } catch(error) {
        res.status(500).json(error)
    }
})

server.get('/api/ingredients', async(req,res)=>{
    try {
        const ingredients = await db.findIngredients();
        res.status(200).json(ingredients)
    } catch(error) {
        res.status(500).json(error)
    }
})

server.get('/api/dishes/:id', async (req,res) => {
    const id = req.params.id;
    db.findSingleDish(id)
    .then(dish => {
        if(dish) {
            res.status(200).json(dish);
        }
        else {
            res.status(400).json({ message: 'dish not found' })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

server.post('/api/dishes', async(req, res)=> {
        await db.addDish(req.body)
        .then(dish => {
            res.status(200).json(dish)
        }).catch(err => {
            res.status(500).json(err)
        })
    
})



server.listen(port, () => 
    console.log(`\nrunning on ${port}\n`)
);