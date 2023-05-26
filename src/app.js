    const express = require('express')
    const app = express()
    const port = process.env.PORT || 3000
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))
    app.get('/about', (req, res) => {
        res.send('This is data in about Page ')
       })
       app.get('/data1', (req, res) => {
        res.send({
            name : "kerolos",
            age : 20,
            city : "Cairo"
        })
       })
       app.get('/data2', (req, res) => {
        res.send({
            name : "kerolos",
            age : 26,
            city : "cairo"
        })
       })
    app.set('view engine', 'hbs');
      const viewsDirectory = path.join (__dirname , "../temp1/views" )
      app.set( "views" , viewsDirectory)
      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../temp1/partials")

      hbs.registerPartials(partialsPath)
    app.get('/' , (req , res) => {
        res.render('index' , {
            title: "HOME",
            desc : "this is home page"
        })
    })
    app.get('/service' , (req , res) => {
        res.render('service' , {
            title : "SERVICE",
            name : "kerolos",
            city: "cairo",
            age: 40,
            img1 : "images/trainer-3.jpg"
        })
    })
    app.get('/team' , (req , res) => {
        res.render('team' , {
            title : "TEAM",
            name : "kerolos",
            city: "cairo",
            age: 22,
            img2 : "images/trainer-2.jpg"
        })
    })
app.get('/products',(req,res)=>{
    console.log(req.query)
    res.send({
        product: 'bmw 520 i'
    })
})
const geocode = require('./tools/geocode')
const forecast = require('./tools/forecast')

app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error : 'You must provide an Address'
        })}
        geocode(req.query.address , (error,data)=>{
            if(error){
                return res.send({error})
            }
            forecast( lat = data.latitude, long = data.longitude , (error,data)=>{
                if(error){
                    return res,send({error})
                }
                res.send({
                    forecast : data,
                    address : 'Country : ' + req.query.address,
                    latitude : 'latitude : ' + lat,
                    longitude : 'longitude : ' + long
                })
            })
        })
})
app.get('*',(req,res) => {
    res.send('404')
})
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })