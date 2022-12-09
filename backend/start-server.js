const express=require( "express");
const app = express();
var cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.options("*", cors({ origin: 'http://localhost:6000', optionsSuccessStatus: 200 }));
// Launch the server on the port 5000


app.use(cors({ origin: "http://localhost:6000", optionsSuccessStatus: 200 }));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/test',(req, res)=>{
    console.log("SUccess");

    res.send("Successfullll test ::");

} );
const server = app.listen(6000, () => {
    
  console.log(`Listening at http://localhost:6000`);
});

