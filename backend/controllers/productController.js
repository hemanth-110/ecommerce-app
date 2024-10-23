import {v2 as cloudinary} from 'cloudinary'
import productModels from '../models/productModels.js'

// function for add product

const addProduct = async (req, res) => {
    try {

        const {name, description, price, category, subCategory, sizes, bestSeller } = req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item)=>item !== undefined)
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url
            })
        )

        const productData = {
            name, 
            description,
            category,
            price: Number(price),
            subCategory,
            bestSeller: bestSeller === 'true' ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }

        const product = new productModels(productData);
        await product.save()

        res.json({success:true, message: "Product Added"})

    } catch (error) {
        res.json({success:false, meaasge:error.message})
    }
}

// function for list product

const listProduct = async (req, res) => {
    try {
        const products = await productModels.find({});
        res.json({success:true, products})
    } catch(error) {
        res.json({success:false, meaasge:error.message})
    }
}

// function for remove product

const removeProduct = async (req, res) => {
    try {
        await productModels.findByIdAndDelete(req.body.id)
        res.json({success:true, message: "Product Removed"})
    } catch (error) {
        res.json({success:false, meaasge:error.message})
    }
}

// function for single product

const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body
        const product = await productModels.findBtId(productId)
        res.json({success:true, products})
    } catch (error) {
        res.json({success:false, meaasge:error.message})
    }
}

export {addProduct, listProduct, removeProduct, singleProduct}