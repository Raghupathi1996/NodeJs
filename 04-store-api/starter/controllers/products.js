const { query } = require('express')
const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    // const search = 'ba'
    const products = await Product.find({ price: {$gt: 30}}).sort('price name').sort("name").select('name price').limit(10).skip(1)
    res.status(200).json({products, nbHits: products.length})
}

const getAllProducts = async (req,res) => {
    console.log(req.query)
    const { featured, company, name, sort, fields, numericFilters } = req.query
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
    if(numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(<|>|<=|=|>=)\b/g
        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        )
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if(options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) }
            }
    });        
    }

    let result = Product.find(queryObject)
    
    if(sort) {
        const sortList = sort.split(",").join(" ")
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    if(fields) {
        const fieldList = fields.split(",").join(" ")
        result = result.select(fieldList)
    }

    console.log(queryObject)
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const products = await result

    // const product = await result
    res.status(200).json({products, nbHits: products.length})
}


module.exports = {
    getAllProducts, 
    getAllProductsStatic,
}