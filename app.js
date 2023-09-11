const express = require('express')
const { blogs } = require('./model/index')
const { where } = require('sequelize')
const app = express()

//database connection
require("./model/index")

//telling the node.js to set view-engine to ejs
app.set('view engine', 'ejs')

//to phrase form data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//for home blogs page
app.get('/', async(req, res)=>{
    // displaying data from database
    const allBlogs = await blogs.findAll()
    //console.log(allBlogs)

    //passing db data through blogs array
    res.render('blogs',{blogs:allBlogs})
})

//for create blog page
app.get('/createBlog', (req, res)=>{
    res.render('createBlog')
})

//creating blog post
app.post('/createBlog', async(req, res)=>{
    //console.log(req.body)
    const title = req.body.title
    const subtitle = req.body.subtitle
    const description = req.body.description
   // const {title, subtitle, description} = req.body

    await blogs.create({
        title: title,
        subtitle : subtitle,
        description : description
    }) 
    res.redirect('/')
})

app.get('/single/:id', async(req,res)=>{
    
    //get id of clicked blog post
    const id = req.params.id

    //get all data of given id post
    const blog = await blogs.findAll({
       where : {
        id: id
       }
    })

    res.render("singleBlog",{blogs:blog})
})

//to delete post
app.get('/delete/:id', async(req,res)=>{
    
    //get id of clicked blog post
    const id = req.params.id

    //delete post of given id post
    await blogs.destroy({
       where : {
        id: id
       }
    })

    res.redirect("/")
})

//to edit post
app.get('/edit/:id', async(req,res)=>{
    
    //get id of clicked blog post
    const id = req.params.id

    //get data of given id post
    const blog = await blogs.findAll({
       where : {
        id: id
       }
    })

    res.render("editBlog",{blogs:blog})
})

//creating blog post
app.post('/editBlog/:id', async(req, res)=>{
    
    //get id of clicked blog post
    const id = req.params.id
    const title = req.body.title
    const subtitle = req.body.subtitle
    const description = req.body.description
   // const {title, subtitle, description} = req.body

   await blogs.update({
        title: title,
        subtitle : subtitle,
        description : description
    },{
        where : {
            id: id
        }
    }) 
    res.redirect('/')
})


app.listen(3000, ()=>{
    console.log("NodeJS project has started")
})