const express = require('express')
const app = express()


//* default route or root route
app.get('/', (req, res) => {
    res.send('default route')
})

