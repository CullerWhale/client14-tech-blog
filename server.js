const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

//handle
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

//middleware
// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({ helpers });


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//handle
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));
});
