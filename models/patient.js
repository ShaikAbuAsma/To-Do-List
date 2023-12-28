const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({

   pname: {
        type: String,
        required: true
    },
    dname:{
        type:String,
        required:true
    },
    time:{
        type: String,
        required: true
    }

},{
    timestamps:true
})


const Apmt = mongoose.model('list', listSchema);

module.exports = Apmt;