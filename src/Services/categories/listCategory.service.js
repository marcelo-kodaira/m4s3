import database from "../../database"

const listCategoryService = async ()=>{
    try{
        const list = await database.query(
        `SELECT * FROM Categories
        `,[])
        return list.rows
    }catch(err){
        throw new Error(err)
    }
}

export default listCategoryService