const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    product_ID: {type: Schema.Types.ObjectId, ref: 'ProdID'},
    product_type: {type: String, enum: ['KraziTwist', 'SweetWhirls', 'FancySticks', 'GourmetJellyRG', 'Jawbreakers', 'MiniSticks', 'JoyPops', 'DispStands' ]},
    quantity: Number,
    img: {
        required: true,
        type: String,
        default: "placeholder.jpg",
      },    
})

const customerSchema = new Schema({
    customerID: {type: Schema.Types.ObjectId, ref: 'CusID'},
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    postalCode: String,
    email: String,
    mycart:[productSchema], 

    avatar: String,
    googleId: String,
    
    phone: String,
    companyName: String,
    companyType: String,
    fax: String,
    password: String
}, {
    timestamps: true
  });

  

module.exports = mongoose.model('User', customerSchema)