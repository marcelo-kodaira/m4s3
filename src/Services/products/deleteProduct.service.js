import database from "../../database"

const deleteProductService = async (id) =>{

    try{
        const deletedProduct = await database.query(
            `DELETE FROM Products WHERE id = $1 RETURNING *`,[id])

            if(deletedProduct.rowCount === 0){
                throw new Error("Invalid ID")
            }
            return deletedProduct.rows[0]
    }catch(err){
        throw new Error(err)
    }
}

export default deleteProductService