// const Product = require('../models/product')
const User = require('../models/user')



async function giveItemToCart(req,res){
    products = Product.find({}, function(err, items){
        document.getElementById(`${items.product_type}`)
    });

    await User.findOneAndUpdate({_id:req.params.id}, {$push:{'mycart':products}})
    user = await User.find(req.user).push('mycart');
    res.render('products/cart',{users: user})
}

function showCart(req, res){
    User.find({mycart}, function(err, user){
        //  console.log(items)
        res.render('products', {items: user})
    });
}

    
module.exports = { 
    giveItemToCart,
    showCart,

}