const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    product_ID: {type: Schema.Types.ObjectId, ref: 'ProdID'},
    product_type: {type: String, enum: ['Krazi Twist', 'Sweet Whirls', 'Fancy Sticks', 'Gourmet Jelly RG', 'Jawbreakers', 'Mini Sticks', 'Joy Pops', 'Display Stands' ]},
    quantity: Number
});

const customerSchema = new Schema({
    customerID: {type: Schema.Types.ObjectId, ref: 'CusID'},
    firstName: String,
    lastName: String,
    street: String,
    City: String,
    postalCode: String,
    email: String,
    
    phone: String,
    companyName: String,
    companyType: String,
    fax: String,
    password: String
})

const orderSchema = new Schema({
    order_num: String,
    customer: [customerSchema],
    products: [productSchema], 
    ship_date: {type: Schema.Types.Date}
})

module.exports = mongoose.model('Orders', orderSchema)