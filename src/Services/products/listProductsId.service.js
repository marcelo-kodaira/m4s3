import database from "../../database"

const listProductsIdService = async(id)=>{
    try{
        const listId = await database.query(`SELECT * FROM Products WHERE id = $1`,[id])
        return listId.rows[0]
    }catch(err){
        throw new Error(err)
    }
}

export default listProductsIdService