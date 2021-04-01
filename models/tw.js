const mongoose = require('mongoose');

const twSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true,
        maxLength:150
    }
}, { 
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('tws', twSchema);