const express = require("express")
const PORT = 1337

const app = express()

app.listen(PORT, () =>{
  console.log("listening with attentiveness on port " + PORT)
})

