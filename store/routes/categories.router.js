const express = require('express');
const router = express.Router();


router.get('/categories/:categoriesId/products/:productsId',(req,res) =>{
  const {categoriesId,productsId} = req.params;
 res.json({
    categoriesId,
    productsId,
  });
 })

 module.exports = router;
