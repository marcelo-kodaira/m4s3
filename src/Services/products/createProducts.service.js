import database from "../../database"


const createProductService = async (name,price,category_id)=>{

    try{
        const newProduct = await database.query(
        `INSERT INTO
            Products(name,price,category_id)
        VALUES
            ($1,$2,$3)
        RETURNING *`
        ,[name,price,category_id])
        return newProduct.rows[0]
    }catch(err){
        throw new Error(err)
    }
}

export default createProductService