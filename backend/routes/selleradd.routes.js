module.exports = (app) => {

    const selleradd = require('../controllers/sellerAdd.controller');

    app.post('/selleradd',selleradd.upload.single('image'),selleradd.createSellerAdd);

    app.get('/selleradd',selleradd.getAllsellerAdd);

    app.get('/selleradd/:addId',selleradd.getSellerAdd);

    app.put('/selleradd/:addId',selleradd.updateSellerAdd);

    app.delete('/selleradd/:addId', selleradd.deleteSellerAdd)  ;

    
}