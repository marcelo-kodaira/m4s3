import createCategoryService from "../Services/categories/createCategory.service"
import deleteCategoryService from "../Services/categories/deleteCategory.service"
import listCategoryService from "../Services/categories/listCategory.service"
import listCategoryIdService from "../Services/categories/listCategoryId.service"
import patchCategoryService from "../Services/categories/patchCategory.service"

const createCategoryController = async (req,res) =>{
    const {name} = req.body
    
    try{
      const newCategory =  await createCategoryService(name)
      return res.status(201).json({
        message: "category Created:",
        category: newCategory})
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

const listCategoryController = async (req,res) =>{
  try{
    const categoryList = await listCategoryService()
    return res.status(200).json(categoryList)
  }catch(err){
    return res.status(402).json({message: err.message})
  }
}

const listCategoryIdController = async(req,res) =>{
  const {id} = req.params
  try{
    const categoryListId = await listCategoryIdService(id)
    return res.status(200).json(categoryListId)
  }catch(err){
    return res.status(400).json({message: err.message})
  }
}


const patchCategoryController = async(req,res) =>{
  const category = req.body
  const {id} = req.params
  try{
    const patchedCategory = await patchCategoryService(category,id)
    return res.status(200).json({
      message: "Product updated",
      category: patchedCategory})
  }catch(err){
    return res.status(400).json({message: err.message})
  }
}


const deleteCategoryController = async(req,res) =>{
  const {id} = req.params
  try{
    const deletedCategory = await deleteCategoryService(id)
    return res.status(204).json(deletedCategory)
  }catch(err){
    return res.status(400).json({message: err.message})
  }
}

export {createCategoryController, listCategoryController, listCategoryIdController, patchCategoryController, deleteCategoryController}