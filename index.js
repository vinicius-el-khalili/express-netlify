express = require('express')
app = express()
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next()
})
app.get("/",(req,res)=>{
    res.json({"mssg":"hello"})
})
app.listen(3000, ()=>{
    console.log("listening at port 3000")
})
