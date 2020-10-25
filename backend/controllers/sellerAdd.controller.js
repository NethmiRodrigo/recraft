const {db} = require('../util/admin')

exports.createSellerAdd = (req,res)=>{
    
    const newSellerAdd = {
            addId: req.body.reqId,
            userId: req.body.userId,
            typeId: req.body.typeId,
            categoryId: req.body.categoryId,
            conditionId: req.body.conditionId,
            postDate: req.body.postDate,
            isActive: req.body.isActive
    }

    db.collection('sellerAdd')
        .add(newSellerAdd)
        .then(()=>{
            res.json(newSellerAdd);
        })
}

exports.getSellerAdd = (req,res)=>{
        let sellerAdd = {}
        db.doc(`/selleradd/${req.params.addId}`)
            .get()
            .then((doc)=>{
                if(!doc.exists)
                    return res.status(404).json({error:'Seller not found'})
                sellerAdd = doc.data();
                console.log(sellerAdd)
                return res.status(200).send(sellerAdd)
            })

}

exports.updateSellerAdd = (req,res)=>{

}

exports.deleteSellerAdd = (req,res)=>{
    db.doc(`/selleradd/${req.params.addId}`)
        .get()
        .then((doc)=>{
            if(!doc.exists)
                return res.status(404).json({error:"Seller not found"})
           
        })
}