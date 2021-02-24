const express = require("express")
const PORT = 1337

const app = express()

app.use(express.static('public'))

app.listen(PORT, () =>{
  console.log("listening with attentiveness on port " + PORT)
})

