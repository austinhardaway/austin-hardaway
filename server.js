// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
// const enforce = require('express-sslify');
const mailer = require("./src/server/Mailer")


app = express();
// app.use(enforce.HTTPS({
//   trustProtoHeader: true
// }));
app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.json());

let router = express.Router();

router.post('/send', (req, res) => {
  console.log(req.body)
  mailer.sendMail(req.body.email, req.body.subject, req.body.body);
  res.send("Success");
})
app.use('/api', router);


const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
