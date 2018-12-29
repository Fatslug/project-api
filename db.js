var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projects', { useNewUrlParser: true }).then(() => {
    console.log('Successfully connect to MongoDB');
}).catch((e) => {
    console.log('Error connecting to MongoDB', e);
});