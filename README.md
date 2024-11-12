# INTASEND SERVER FOR M-PESA STK PUSH USING EXPRESS JS🫡!
<h1>How it works</h1>
<p>This server domain takes three params i.e </p>
<ol>
  <li>Current domain of frontend <em>(This is a cors security feature)</em></li>
  <li>Phone number to recieve stk push in this format: +254*********</li>
  <li>Amount of money to charge e.g 100</li>
</ol>
<h3>Code example 😌</h3>

```javascript

app.get("/transact/:number/:amount/:website", (req, res) => {
  let phoneNumber, amount, website;

  phoneNumber = req.params.number;
  amount = req.params.amount;
  website = req.params.website;
};
```
<p>The requested paramas are then sent to Intasend API and it initiates payment by sending an stk push to the number given if all goes well.</p>

<h1>How to run it locally 🤔 </h1>
<h3>PREREQUISITIES</h3>
<ul>
  <li>Have nodejs installed</li>
  <li>Clone this repo locally with git</li>
  <li>Create and varify your account from <a href="https://payment.intasend.com/">intasend</a></li>
</ul>

<h3>Lets get started :)</h3>
<p>In your terminal enter the following command install dependencies</p>

```bash
npm install

```
OR
```
yarn install
```
<p>After opening this repo in your code edtor, you will have to create an .env file to have the our environment variables which you will generate after successfully verifying your account from intasend</p>

```.env
SECRET_KEY="your secret key"
PUBLIC_KEY="your public key"
```

<h3>Ready for use 🧐</h3>
<p>Yes, if you have configured everything above, your are set. Now we'll have to run it.</p>
<p>To run it type the following command</p>

```bash
npm run dev
```
OR

```bash
npm run start
```
<p>You'll be shown that the server is running on port 3000</p>
<p>Open your browser and enter the url <strong>http://localhost:3000</strong></p>

<h3>Usage:</h3>
<p>Add the earlie created params to your url to initate stk push</p>
<p>Example:  <strong>http://localhost:3000/transact/2547*********/100/localhost:3000</strong></p>

<h3>Side Note://</h3>
<p>If you also want a ready to use frontend for this server, I have already made one, <a href="https://github.com/Unrealrojo234/PayApp">link to frontend repo</a></p>
<p>Also to add more functiuonality and get more insights on intasend api, here is the <a href="https://developers.intasend.com/docs/introduction">link to their docs</a></p>

<p>Happy Coding!</p>
