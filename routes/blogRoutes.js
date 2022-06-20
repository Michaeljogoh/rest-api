const express = require('express');
const app = express();
const router = express.Router();




// post blog posts
router.post('/blogposts', (req , res)=>{

});

// Get blog post paginational
router.get('/', (req, res)=>{
    res.send("Hello here we are aigain")
});

// Patch blog posts
router.patch('/blogposts', (req, res)=>{

});

//  Delet blog post
router.delete('/blogposts', (req , res ) =>{

});



module.exports = router;