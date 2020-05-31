const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://localhost/imageDB',//para despliegue en dcker usar//'mongodb://mongo:27017/imageDB',
    { useNewUrlParser: true }
  ).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));