const express = require('express')
const firebase = require('firebase');
const config = require('./config/config')

const app = express()

firebase.initializeApp(config);

//middleware
app.use(express.urlencoded())
app.use(express.json())


//Sign up user

app.post('/register', (req,res)=> {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.cpassword,
        username: req.body.username
    }

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data => {
            return res.status(201).json({message: `Succesfull`})
        })
        .catch((err)=> {
            console.log(err)

            return res.status(500).json({error:err.code})
        })
})

//login user

app.post('/',(req,res)=>{
    const user = {
        email: req.body.email,
        password: req.body.password
    }
   
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then(data => {
        return res.status(201).json({message: `Succesfull`})
    })
    .catch((err)=> {
        console.log(err)

        return res.status(500).json({error:err.code})
    })
})

app.listen(3060, ()=>console.log('Running App'))