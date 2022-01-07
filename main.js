const express = require("express");
const app = express();
const { adduser } = require("./user");
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.post("/adduser", async (req, res) => {
const data = req.body;
await adduser(data);
res.json({message : "Record Added"});
});

app.listen(4000,() => console.log("Server Started"));
