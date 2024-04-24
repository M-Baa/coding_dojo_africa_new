const express = require("express");
const app = express();
const cors = require("cors");
require ("dotenv").config();
const port = process.env.PORT;


// === MIDDLEWARE === 
app.use(express.json(),express.urlencoded({extended:true}),cors());

// grab the config
require("./configs/mongoose.config");



//  grab the routes 
require("./routes/country.routes")(app);






app.listen(port,()=>{console.log("listening to port" +port);
});