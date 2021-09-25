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


module.exports = mongoose.model('Product', productSchema)