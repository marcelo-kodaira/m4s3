import createProductService from "../Services/products/createProducts.service"
import deleteProductService from "../Services/products/deleteProduct.service"
import listProductService from "../Services/products/listProducts.service"
import listProductsCategoriesService from "../Services/products/listProductsCategories.service"
import listProductsIdService from "../Services/products/listProductsId.service"
import patchProductService from "../Services/products/patchProduct.service"

const createProductController = async (req,res) =>{
    const {name,price,category_id} = req.body
    try{
        const product = await createProductService(name,price,category_id)
        return res.status(201).json({
            message: "Product Created",
            product: product
        })
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

const listProductController = async (req,res) =>{
    try{
        const listProduct = await listProductService()
        return res.status(200).json(listProduct)
    }catch(err){
        return res.status(402).json({message: err.message})
    }
}

const listProductIdController = async (req,res) =>{
    const {id} = req.params
    try{
        const listId = await listProductsIdService(id)
        return res.status(200).json(listId)
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

const patchProductController = async (req,res) =>{
    const product = req.body
    const{id} = req.params
    try{
        const patchedProduct = await patchProductService(product,id)
        return res.status(200).json({
            message: "Product patched",
            product: patchedProduct
        })
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

const deleteProductController = async(req,res) =>{
    const {id} = req.params
    try{
        const deletedProduct = await deleteProductService(id)
        return res.status(204).json(deletedProduct)
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

const listProductCategoriesController = async(req,res) =>{
    const {categoryId} = req.params
    console.log(categoryId)
    try{
        const list = await listProductsCategoriesService(categoryId)
        console.log(list)
        return res.status(200).json(list)
    }catch(err){
        console.log(err)
        return res.status(404).json({message: err.message})
    }
}

export {createProductController, listProductController, listProductIdController, patchProductController, deleteProductController, listProductCategoriesController}