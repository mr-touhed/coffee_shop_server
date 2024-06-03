const app = require("./app/app")


const PORT = process.env.POST || 5000





app.get("/", (req,res) =>{
        res.send("server is running now")
})

app.listen(PORT, () => console.log('server is running ...'))