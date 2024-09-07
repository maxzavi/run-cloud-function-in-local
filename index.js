const functions = require('@google-cloud/functions-framework')

functions.http ('demo', (req, res)=>{
    console.log(req.query)
    const {name} = req.query
    const nameGreet = name?name:'Anonymous'
    res.send ({
        "message": `Hello ${nameGreet}`
    })
})