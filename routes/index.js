const router = require('express').Router();
const apiRoutes = require('./api');
const Category = require('../models/Category.js');

router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

//handlebar homepage
router.get('/', (req, res) => {
  res.render('homepage')
} )

//get all categories
router.get('/category', async (req, res) => {
  const data = await Category.findAll()
  const neededData = data.map((pizza) =>
    pizza.get({plain: true}))
    console.log(neededData);

  res.render('oneCategory', {neededData, loggedIn: true});
  // res.render('oneCategory', {neededData, req.session.loggedIn });       module 14 sessions and class activities
  //api route for user activity number 4
  //middleware one line on server next activity number 5
});



module.exports = router;