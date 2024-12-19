const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        
    }], 
    color: {
        type: String,
       
    },
});
exports.Category = mongoose.model('Category', categorySchema);