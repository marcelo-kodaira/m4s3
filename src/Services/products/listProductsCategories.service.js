import database from "../../database"

const listProductsCategoriesService = async(category) =>{
    try{
        const list = await database.query(
        `SELECT
            p.name,
            p.price,
            c.name category
        FROM
            products p
        JOIN
            categories c ON p.category_id = c.id
        WHERE
            p.category_id = $1
        `,[category])
        console.log(category)
        return list.rows
        }
    catch(err){
        throw new Error(err)
    }
}

export default listProductsCategoriesService