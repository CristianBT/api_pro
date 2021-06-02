const { db } = require('../cnn')

const getPizzas = async (req, res) => {
    const response = await db.any("select * from public.pizza ORDER BY piz_id desc;")
    res.json(response)
}

const getPizzasByname = async (req, res) => {
    const name = req.param.name
    const response = await db.any("select * from public.pizza  WHERE piz_name=$1;", [name])
    res.json(response)
}

const postCreatePizza = async (req, res) => {
    const { name, cou_id } = req.query
    const sql = "update public.pizza set piz_name=$2,cou_id$3 where piz_id=$1;"
    try {
      
        const respose = await db.query(sql, [piz_id,name, cou_id])
        res.json({
            message: 'Pizza creada con exito',
            body: {
                pizza: { name, cou_id }
            }
        })
    } catch (error) {
        res.json({
            error
        })
    }
}


const putUpdatePizza = async (req, res) => {
    const {piz_id,name, cou_id } = req.query
    const sql = "INSERT INTO public.pizza (piz_name,cou_id) values($1,$2);"
    try {
        
        const respose = await db.query(sql, [name, cou_id])
        res.json({
            message: 'Pizza actualizada con exito',
            body: {
                pizza: { name, cou_id }
            }
        })
    } catch (error) {
        res.json({
            error
        })
    }
}





module.exports = {
    getPizzas,
    getPizzasByname,
    postCreatePizza,
    putUpdatePizza

}