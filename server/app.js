const express = require('express')
const path = require('path');


const app = express()
const port = 8080
//--------------Lisening----------------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


//--------------Function----------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/welcome.html'));

})

app.get('/parmter', (req, res) => {
  // console.log( req.query.Altitude)
  // console.log( req.query.HIS)
  // console.log( req.query.ADI )
  //http://localhost:8080/parmter?Altitude=2500&HIS=200&ADI=30
  b_altitude = req.query.Altitude >0  && req.query.Altitude <= 3000
  b_his = req.query.HIS >=0  && req.query.HIS <=360
  b_adi = req.query.ADI  >= 0  && req.query.ADI <= 100

  if(b_altitude && b_his && b_adi)
    res.json({'status':'succes',
              'data':{
                      'Altitude':req.query.Altitude,
                      'HIS':req.query.HIS,
                      'ADI':req.query.ADI
                    }
              })
  else 
  res.json({'status':'faild',data:{}})


})

