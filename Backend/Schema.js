const mongoose = require('mongoose');

const Restaurant_Schema = new mongoose.Schema({
    name:{
    type: String,
    required : true
    },

    address :{
    type: String,
    required : true
    },

    rating :{
    type: Number,
    required : true
    },

    image :{
    type: String,
    required : true
    }
});

const Menu_Item_Schema = new mongoose.Schema({
    Dish_name : {
        type : String,
        required : true, 
        cost: Number
    }
});

const Restaurant = mongoose.model('Restaurant', Restaurant_Schema);
const Menu_Item = mongoose.model('Menu_Item', Menu_Item_Schema);

module.exports = {
    Restaurant,
    Menu_Item
};