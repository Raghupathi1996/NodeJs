const { query } = require('express')
const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    // const search = 'ba'
    const products = await Product.find({}).sort('-price')
    res.status(200).json({products, nbHits: products.length})
}

const getAllProducts = async (req,res) => {
    console.log(req.query)
    const { featured, company, name, sort } = req.query
    const queryObject = {}
    if(featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if(company) {
        queryObject.company = company  // company attribute extracted
    }

    if(name) {
        queryObject.name = { $regex: name, $options: 'i'}  // regular expression for the names
    }

    // let product = Product.find(queryObject)
    // console.log("after find query");
    // if(sort) {
    //     product = await product.sort(sort)
    //     console.log("sorting");
    // }

    let result = Product.find(queryObject)
    if(sort) {
        const sortList = sort.split(",").join(" ")
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }
    const products = await result

    // const product = await result
    res.status(200).json({products, nbHits: products.length})
}


module.exports = {
    getAllProducts, 
    getAllProductsStatic,
}