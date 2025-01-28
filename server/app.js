require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/connection");
const router = require("./Routes/router")
const PORT = 5000;





// middleware
app.use(express.json());



app.use(cors());
app.use(router);





// app.get("/", (req, res) => {
//   res.status(200).json("server started")
// }); 

app.listen(PORT, () =>{
 console.log(`Server is running on ${PORT}`);
});


 