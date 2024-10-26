const thucungSchema = require('../models/thucung.model')

// View
const viewListthucung = async (req, res) => {
    const danhSachthucung = await thucung.find()

    res.render('thu cung', {
        title: 'Danh sach thu cung',
        thucung: danhSachthucung
    })
}
const viewAddthucung = async (req, res) => {
    res.render('add-thucung', {
        title: 'Them moi 1 thucung',
        tenthucung: '',
        loaithucung: '',
    })
}
const viewUpdatethucung = async (req, res) => {
    console.log('thucung  id', req.params.id)
    const chiTietthucung = await thucungSchema.findOne({_id: req.params.id})
    res.render('update-thucung', {
        title: 'Them moi 1 thucung',
        _id: chiTietthucung._id,
        tenthucung: chiTietthucung.tenthucung,
        sotuoi: chiTietthucung.sotuoi,
        cannang: chiTietthucung.cannang,
        chieucao: chiTietthucung.chieucao,
    })
}

// API
const apiListthucung = async (req, res) => {}
const apiAddthucung = async (req, res) => {
    console.log('Data', req.body)
    const newthucung = new thucung(req.body)
    await newthucung.save()
    return res.redirect('/thucung')
}
const apiUpdatethucung = async (req, res) => {
    console.log('thucung id', req.params.id)
    await thucung.findByIdAndUpdate(req.params.id, req.body)
    return res.redirect('/thucung')
}
const apiDeletethucung = async (req, res) => {}

module.exports = {
    viewListthucung,
    viewAddthucung,
    viewUpdatethucung,
    apiListthucung,
    apiAddthucung,  
    apiUpdatethucung,
    apiDeletethucung,
}
