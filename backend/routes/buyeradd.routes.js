module.exports = (app) => {

    const buyeradd = require('../controllers/buyerAdd.controller');

    app.post('/buyeradd',buyeradd.createBuyerAdd);

    app.get('/buyeradd/:addId',buyeradd.getBuyerAdd);

    app.put('/buyeradd/:addId',buyeradd.updateBuyerAdd);

    app.delete('/buyeradd/:addId', buyeradd.deleteBuyerAdd)  ;


}