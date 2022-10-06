import database from "../../database"

const patchProductService = async (product,id) =>{
    try{
        const keys = Object.keys(product)
        const values = Object.values(product)
        let query = `UPDATE Products SET `

        keys.forEach((keys,index) => {
            query += `${keys} = \$${index+=1}, `
        })
        query = query.slice(0,-2)
        query += ` WHERE id = \$${keys.length+=1} RETURNING *;`

        const patchedProduct = await database.query(query,[...values,id])

        if(patchedProduct.rowCount === 0){
            throw new Error('Invalid ID')
        }
        return patchedProduct.rows[0]

    }catch(err){
        throw new Error(err)
    }
}

export default patchProductService