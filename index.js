const express=require('express')
const app=express()

app.set('view engine','ejs')
app.set('views','templates')

app.use(express.static('static'))  

app.use(express.urlencoded({extended:false}))


let videos=[
    { name:'scootminiwebseries',link:'0Lz3uhM483k',thumbnail:'v1.png'},
    {name:'vogue',link:'Bca6cOdx3aA',thumbnail:'v2.png'},
    {name:'uppumulak',link:'dwwPyjyIXXE',thumbnail:'v3.png'},
    {name:'icedcoffee',link:'t9Yr2PQBy7s',thumbnail:'v4.png'},
    {name:'haniaamir',link:'EbbrMs55dRs',thumbnail:'v5.png'},
    {name:'unstoppable',link:'C46bhsvap5U',thumbnail:'v6.png'}
]

app.get('/',(req,res)=>{
    res.render('main',{videos:videos})
})

app.get('/play/:link',(req,res)=>{
    res.render('video',{link:req.params.link})
})




app.listen(5000,(req,res)=>{
    console.log('app runs on port 5000')
})