import database from "../../database"

const listProductService = async() =>{

    try{
        const listProducts = await database.query(
        `SELECT * FROM Products`,[])
        return listProducts.rows
    }catch(err){
        throw new Error(err)
    }
}

export default listProductService