import database from "../../database"

const patchCategoryService = async (category,id)=>{
try{
    let keys = Object.keys(category)
    let values = Object.values(category)
    let query = `UPDATE Categories SET `

    keys.forEach((keys,index) => {
        query += `${keys} = \$${index+=1}, ` 
    });
    query = query.slice(0,-2)
    query += ` WHERE id = \$${keys.length+=1} RETURNING *;`

    const patchedCategory = await database.query(
        query,
        [...values,id]
        )

    if(patchedCategory.rowCount === 0){
        throw new Error('Category not found')
    }

    return patchedCategory.rows[0]

}catch(err){
    throw new Error(err)
    }   
}

export default patchCategoryService