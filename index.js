const express  = require('express');
const app = express();
const dotenv = require('dotenv').config()
const blogRoutes = require('./routes/blogRoutes');




// Routes
app.use(blogRoutes);

//Port
const PORT = process.env.PORT
// Server
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
});