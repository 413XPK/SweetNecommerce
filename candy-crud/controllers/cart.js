// const Product = require('../models/product')
const User = require('../models/user')

// async function createCart(req,res){
//     let newCart = new Product({
//         name: req.body.itemName,
//         quantity: req.body.itemQuan,
//         img: req.body.itemImage,
//     })
//     await newCart.save()
//     let allProds = await Product.find({})

//     res.render('/',{cart: allProds})
// }

// function getCart(req, res){
//     let cart = await 
// }

// async function giveItemToCart(req,res){
//         let users = await User.find({}, function(err,user){
//             user.mycart.push(Product.req.user)
             
//             user.save(function(err){   
//                 res.render('products/cart',{user, users })
                
//             })
//          }).catch(function(err) {
//             res.status(400).json(err);
//           });
// }

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

    // document.getElementById(`<%=p.img%>`).addEventListener('click', handleAddItem);

    // async function handleAddItem(){
    //     cart = document.getElementById('placeCart') 
    //         document.getElementById(`<%=p.product_type%>`).push(cart)
    //         await cart.save()
    // }
    // let users = await User.find(req.params.id).populate('mycart');
    //     res.render('products',{users, user})

    // }

// async function giveItemToCart(req,res){
//     let users = await User.find({}, function(err,user){
//         user.mycart.push(Product.req.body)
         
//         user.save(function(err){   
//             res.render('products',{user, users })
//             console.log(user)
//          console.log(users)
//         })
//      }).catch(function(err) {
//         res.status(400).json(err);
//       });

    //.then(function(item){
    //     user.mycart.forEach(function(item){
    //         Product.findById(`<%=p.img%>`)
    //     })
    // })
    // .then(user.mycart.push)
    // let getProdName = req.query.Product.name
// }

module.exports = { 
    giveItemToCart,
    showCart,

}