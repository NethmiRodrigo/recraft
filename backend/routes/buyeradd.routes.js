module.exports = (app) => {

    const buyeradd = require('../controllers/buyerAdd.controller');

    app.post('/buyeradd', buyeradd.upload.single('image'), buyeradd.createBuyerAdd);

    app.get('/buyeradd', buyeradd.getAllbuyerAdd);

    app.get('/buyeradd/:addId',buyeradd.getBuyerAdd);

    app.update('/buyeradd/:addId',buyeradd.updateBuyerAdd);

    app.delete('/buyeradd/:addId', buyeradd.deleteBuyerAdd)  ;

    
}