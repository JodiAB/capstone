import {getProducts, getProduct, addProduct, upProduct} from '../models/database.js';

export default {

    getMany: async(req,res)=>{
        res.send(await getProducts());
        },


    postMany: async(req,res)=>{
        const {name, des, price, quan } = req.body
        const post = await addProduct(name, des, price, quan)
        res.send(await getProducts())
    },
   getFew: async(req,res)=>{
    const id = +req.params.id
    const item = await getProduct(id)
    res.send(item);
   },
    deleteMany: async(req,res)=>{
        async(req, res) => {
            const id = +req.params.id
            const products = await getProducts()
            const index = products.findIndex(f => f.id === id);
            products.splice(index, 1);
            res.send(products)
        }
    },
    patchMany: async (req, res) =>{

        const [product] = await getProduct(+req.params.id)
        let {name, age} = req.body
        name ? name=name: {name} = product
        age ? age=age: {age} = product
        console.log(product);
        await upProduct(name, age, +req.params.id)
        res.json(await getProducts())
    }
    
}

