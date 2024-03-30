const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model.js")
const productRoutes = require("./routes/product.route.js")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/products", productRoutes)



app.get("/", (req, res) => {
    res.send("hello guys");
})


mongoose.connect("mongodb+srv://baranekumar56:baranekumar56@backenddb.igwrbwm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
   console.log("Connected to DB Successfully"); 
   app.listen(3000, () => {
    console.log("server running on port 3000")
    })
}).catch( (error) => {
    console.log("Connection failed message:",error.message);
}
);

