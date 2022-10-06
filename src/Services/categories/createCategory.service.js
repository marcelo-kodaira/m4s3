import database from "../../database"

const createCategoryService = async (name) =>{
    try{
    const category = await database.query(
        `INSERT INTO   
            Categories(name)
        VALUES
            ($1)
        RETURNING *`,
        [name]
        )
    return category.rows[0]
    }catch(err){
        throw new Error(err)
    }
}

export default createCategoryService