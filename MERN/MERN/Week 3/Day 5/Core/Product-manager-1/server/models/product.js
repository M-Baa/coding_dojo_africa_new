// IMPORT THE MONGOOSE LIBRARY
const mongoose =require ("mongoose");


// THE MODEL 
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required :[true,"{PATH} is required "],
        minlength:[3,"{PATH} must be at least three characters"],
    },
    price:{
        type:Number,
        required: [true, "{PATH} is required" ],
    },
    description:{
        type:String,
        required :[true,"{PATH} is required "],
        minlength:[1800,"{PATH}  more description needed"],
    },

    },
    {timestamps:true}

);
const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;
