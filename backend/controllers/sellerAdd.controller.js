const {db} = require('../util/admin')
const {v4: uuidv4} = require('uuid')
const admin = require("firebase-admin");
const config  = require('../config/config')
const multer = require('multer');

var imageFileName = "";
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/tmp/')
  },
  filename: function (req, file, cb) {
    imageFileName = file.fieldname + '-' + Date.now()+ '.png'
    cb(null, imageFileName)
  },

  
})


 
exports.upload = multer({ storage: storage })

exports.createSellerAdd = (req,res)=>{

  const imgToken = uuidv4();
  admin
  .storage()
  .bucket("recraft-dd2c9.appspot.com")
  .upload("public/tmp/"+imageFileName, {
    resumable: false,
    metadata: {
      metadata: {
  
        //Generate token to be appended to imageUrl
        firebaseStorageDownloadTokens: imgToken,
      },
    }
  })
  

    let addId = uuidv4();

    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media&token=${imgToken}`;

    const newSellerAdd = {

            addId: addId,
            userId: req.body.userId,
            typeId: req.body.typeId,
            categoryName: req.body.categoryName,
            conditionDetails: req.body.conditionDetails,
            imageUrl:imageUrl,
            postDate: new Date().toISOString(),
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
        db.doc(`/sellerAdd/${req.params.addId}`)
            .get()
            .then((doc)=>{
                if(!doc.exists)
                    return res.status(404).json({error:'Seller not found'})
                sellerAdd = doc.data();
                console.log(sellerAdd)
                return res.status(200).send(sellerAdd)
            })

}


exports.getAllsellerAdd = (req,res)=>{

  db.collection('sellerAdd')
    .orderBy('postDate', 'desc')
    .get()
    .then((data) => {
      let sellerAddList = [];
      data.forEach((doc)=>{
      sellerAddList.push(doc.data())

      })
      return res.json(sellerAddList);
    })
    .catch((err)=>{
      console.error(err)
      res.status(500).json({error:err.code})  
    })
}

exports.updateSellerAdd = (req,res)=>{

}


exports.deleteSellerAdd = (req,res)=>{
    const document =   db.doc(`/sellerAdd/${req.params.addId}`);
        document
        .get()
        .then((doc)=>{
            if(!doc.exists)
                return res.status(404).json({error:"Seller not found"})
           document.delete();
            return res.status(200).send(doc.data())
        })
}


