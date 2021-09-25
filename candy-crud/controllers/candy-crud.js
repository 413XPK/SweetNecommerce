const Product = require('../models/product');
const User = require('../models/user');





async function giveItemToCart(req, res, next) {
    const updateCart = await User.findOneAndUpdate(req.params.id, {
        name: req.body.name,
        img: req.body.img
    })
    pushToCart = await User.findByIdAndUpdate.populate('mycart', updateCart)
    res.redirect('/products')
}



function showProds(req, res){
    Product.find({}, function(err, items){
        //  console.log(items)
        res.render('products', {products: items})
    });
}

function showProdsMain(req, res){
    Product.find({}, function(err, items){
        //  console.log(items)
        res.render('/index', {products: items})
    });
}


function handleUserForm(req, res){
    // console.log(req.body)
    const newUser = new User({
        id: req.body.userID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        street: req.body.street,
        city: req.body.city,
        postalCode: req.body.postalCode,
        email: req.body.email
    })
    newUser.save().then(() => console.log(newUser))
    res.redirect('/')
}

function showUsers(req,res){
    
    User.find({}, function(err, data){
        // console.log(data)
        res.render('register', {users: data})
        
    })
    
}


function getPics(req, res) {
    Product.find({}, function(err, allPosts){
        // console.log(allPosts)
        res.render('products', {products: allPosts})

    })
}

function getPicsMain(req, res) {
    Product.find({}, function(err, allPosts){
        // console.log(allPosts)
        res.render('/index', {products: allPosts})

    })
}

const addPic = async (req, res) => {
    const newPost = await new Product.Product({
        img: req.file.filename
    })   
    await newPost.save();
}

function index(req, res, next) {
    // console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('/', { 
        users, 
        user: req.user, 
        name: req.query.name, 
        sortKey 
      });
    });
  }
  

  async function removeReg (req, res){
    let deleteReg = await User.deleteOne({ 
        _id: req.params.deleteRegisterIdNumber 
     });
     res.redirect("/register")
 }

 async function editRegi(req,res){
    const regInfo = await User.findById(req.params.editIdNumber)
    res.render('register/edit', {users: regInfo})
}

 async function editRegAndUpdate(req, res){
    const updateReg = await User.findByIdAndUpdate(req.params.editIdNumber, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        street: req.body.street,
        city: req.body.city,
        postalCode: req.body.postalCode,
        email: req.body.email
    })
    await updateReg.save()
    res.redirect('/')
}
 

  module.exports = {
    
    giveItemToCart,
    showProds,

    index,

    handleUserForm,
    showUsers,

    getPics,
    addPic,

    getPicsMain,
    showProdsMain,

    removeReg,
    editRegi,
    editRegAndUpdate

  };