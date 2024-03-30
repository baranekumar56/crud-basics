const Product = require("../models/product.model.js")


const getProducts = async (req, res) => {
    try {
        const data = await Product.find({});
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const getProductById = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await Product.findById(id);
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const addProduct = async (req, res) => {
    try{
        const data = await Product.create(req.body);
        res.status(200).json(data);
        console.log("A document has been added successfully")
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const updateProduct = async (req, res) => {
    try{
        const { id } = req.params;
        let updatedData = await Product.findByIdAndUpdate(id, req.body);

        if (!updatedData){
            return res.status(404).json({message: "Product not fouund"});
        }

        updatedData = await Product.findById(id)
        res.status(200).json(updatedData);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const deleteProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await Product.findByIdAndDelete(id);

        if (!data){
            res.status(404).json({message: "Product not found"});   
        }
        else res.status(200).json({message:"product deleted successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    getProducts, getProductById, addProduct,
    updateProduct, deleteProduct
}