const mongoose = require('mongoose');

console.log(process.env.DATABASE_URL)

mongoose.connect('mongodb+srv://AppUser:WackyTacky1!@cluster0.itsc5.mongodb.net/candy-crud?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  var db = mongoose.connection;

  
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
})

