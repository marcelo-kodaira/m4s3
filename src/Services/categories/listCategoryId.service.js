import database from "../../database"

const listCategoryIdService = async (id)=>{
    try{
        const listId = await database.query(
            `
            SELECT * FROM Categories WHERE ID = $1
            `,
            [id])
            if(listId.rowCount === 0){
               throw new Error("Invalid ID")
            }
            return listId.rows[0]
    }catch(err){
        throw new Error(err)
    }
}

export default listCategoryIdService