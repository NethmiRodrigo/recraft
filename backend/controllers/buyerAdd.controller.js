const {db} = require('../util/admin')

exports.createBuyerAdd = (req,res)=>{
    
    const newBuyeradd = {
            addId: req.body.addId,
            userId: req.body.userId,
            typeId: req.body.typeId,
            categoryId: req.body.categoryId,
            conditionId: req.body.conditionId,
            postDate: req.body.postDate,
            isActive: req.body.isActive
    }

    db.collection('buyerAdd')
    .add(newBuyeradd)
    .then(()=>{
        res.json(newBuyeradd);
    })
}

exports.getBuyerAdd = (req,res)=>{
        let BuyerAdd = {}
        db.doc(`/buyerAdd/${req.params.addId}`)
            .get()
            .then((doc)=>{
                if(!doc.exists)
                    return res.status(404).json({error:'Buyer not found'})
                BuyerAdd = doc.data();
                console.log(BuyerAdd)
                return res.status(200).send(BuyerAdd)
            })

}

exports.updateBuyerAdd = (req,res)=>{

}


exports.deleteBuyerAdd = (req,res)=>{
    const document =   db.doc(`/buyerAdd/${req.params.addId}`);
        document
        .get()
        .then((doc)=>{
            if(!doc.exists)
                return res.status(404).json({error:"Buyer not found"})
           document.delete();
            return res.status(200).send(doc.data())
        })
}