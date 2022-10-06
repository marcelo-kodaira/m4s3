import database from "../../database"

const deleteCategoryService = async (id)=>{

    try{
        const deletedCategory = await database.query(`
        DELETE FROM
            Categories
        WHERE 
            id = $1 
        RETURNING *`,
        [id])

        if(deletedCategory.rowCount === 0){
            throw new Error("Invalid ID")
        }
        
        return deletedCategory.rows[0]
    }catch(err){
        throw new Error(err)
    }
}
export default deleteCategoryService