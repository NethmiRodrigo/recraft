const {db} = require('../util/admin')

exports.createUser = (req,res)=>{

    const newUser = {

        userId: req.body.userId,
        Name: req.body.name,
        Address: req.body.address,
        cityName: req.body.cityName,
        districtName: req.body.districtName,
        phone: req.body.phone,
        isActive: req.body.isActive,
    
    }

    db.collection('user')
        .add(newUser)
        .then(()=>{
            res.json(newUser);
        })
}

exports.getUser = (req,res)=>{
        let user = {}
        db.doc(`/user/${req.params.userId}`)
            .get()
            .then((doc)=>{
                if(!doc.exists)
                    return res.status(404).json({error:'User not found'})
                user = doc.data();
                console.log(user)
                return res.status(200).send(user)
            })

}

exports.updateUser = (req,res)=>{

}

exports.deleteUser = (req,res)=>{
    const document =   db.doc(`/user/${req.params.userId}`);
        document
        .get()
        .then((doc)=>{
            if(!doc.exists)
                return res.status(404).json({error:"User not found"})
           document.delete();
            return res.status(200).send(doc.data())
        })
}