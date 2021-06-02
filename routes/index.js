const {Router} = require('express')
const { getPizzas, getPizzasByname,postCreatePizza,putUpdatePizza} = require('../controllers/pizza controllers')
const { postCreatePizzaIngredient } = require('../controllers/pizza-ingredients')
const route = Router()

route.get('/pizzas',getPizzas) 
route.get('/pizzas/:name',getPizzasByname)
route.post('/pizzas',postCreatePizza)
route.put('/pizzas',putUpdatePizza)
//falta el delete

route.post('/pizzas/ingredientes',postCreatePizzaIngredient)


module.exports=route