const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 3000;
const params = require("express-params");

const IntaSend = require("intasend-node");

//Enabling Access from any origin using express middlewares
app.use(cors());

//Importing environment variables
const publicKey = process.env.SECRET_KEY;
const privateKey = process.env.PUBLIC_KEY;

let intasend = new IntaSend(
  publicKey,
  privateKey,
  false // Test ? Set true for test environment
);

app.get("/", (req, res) => {
  res.send(
    "<h1 style='color:green;text-align:center'>Intasend M-PESA STK-Push server</h1>"
  );
});

//Route that initialises stk push
app.get("/transact/:number/:amount/:website", (req, res) => {
  let phoneNumber, amount, website;

  phoneNumber = req.params.number;
  amount = req.params.amount;
  website = req.params.website;

  //console.log(phoneNumber);
  //console.log(amount);

  res.send(
    "<h1 style='color:green;text-align:center'>Initiate transaction</h1>"
  );

  //Where the magic happens!
  let collection = intasend.collection();
  collection
    .mpesaStkPush({
      first_name: "Joe",
      last_name: "Doe",
      email: "joe@doe.com",
      host: website,
      amount: amount,
      phone_number: phoneNumber,
      api_ref: "live",
    })
    .then((resp) => {
      // Redirect user to URL to complete payment
      console.log(`STK Push Resp:`, resp);
    })
    .catch((err) => {
      console.error(`STK Push Resp error:`, err);
    });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
