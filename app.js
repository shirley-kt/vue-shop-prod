const express = require('express')

const compression = require('compression')

const app = express()
app.use(compression())
app.use(express.static('./dist'))

// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
//     next();
// })

app.listen(8998, () => {
    console.log("server running at http://127.0.0.1:8998")
})

