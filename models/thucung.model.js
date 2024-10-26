const mongoose = require('mongoose')

const thucung = mongoose.Schema({
    tenthucung: {
        type: String,
        required: true,
    },
    sotuoi: {
        type: Number,
        required: true,
    },
    cannang: {
        type: Number,
        require: true,
    },
    chieucao: {
        type: Number,
        required: true,
    }
})

const thucungSchema = mongoose.model('thucung', thucung)
module.exports = thucung;