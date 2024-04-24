const express = require ("express");
// console.log(express);
const app = express();
// console.log(app);
const PORT = 8000;






// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
}); 









// this needs to be below the other code blocks
app.listen( PORT ,()=>{console.log(`the server us up and running on PORT ${PORT}`)});

