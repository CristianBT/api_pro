const { db } = require('../cnn')

const postCreatePizzaIngredient = async (req, res) => {
    const {piz_id,name, cou_id } = req.query
    const sql = "INSERT INTO public.pizza_ingredient (piz_id,ing_id,piz_ing_count) values($1,$2,$3);"
    try {
        
        const respose = await db.query(sql, [piz_id,ing_id,piz_ing_count])
        res.json({
            message: 'Ingrediente aasignado a la pizza creada con exito',
            body: {
                pizza: { piz_id,ing_id,piz_ing_count}
            }
        })
    } catch (error) {
        res.json({
            error
        })
    }
}

module.exports = {

    postCreatePizzaIngredient

}