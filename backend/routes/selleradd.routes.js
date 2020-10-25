module.exports = (app) => {

    const selleradd = require('../controllers/sellerAdd.controller.js');

    app.post('/selleradd',selleradd.createSellerAdd);

    app.get('/selleradd/:addId',selleradd.getSellerAdd);

    app.put('/selleradd/:addId',selleradd.updateSellerAdd);

    app.delete('/selleradd/:addId', selleradd.deleteSellerAdd)  ;


}