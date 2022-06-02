require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json(), cors());
app.options("*", cors());

app.post("/", (_, res) => {
  const timestamp = new Date().getTime() - 30000;
  const msg = Buffer.from(process.env.JWT_API_KEY + meetingNumber + timestamp + role).toString(
    "base64"
  );
  const hash = crypto.createHmac("sha256", process.env.JWT_API_SECRET).update(msg).digest("base64");
  const signature = Buffer.from(
    process.env.JWT_API_KEY,
    meetingNumber,
    timestamp,
    role,
    hash
  ).toString("base64");

  res.json({
    signature: signature,
  });
});

app.listen(port, () => console.log(`Zoom Meeting SDK Sample Signature Node.js on port ${port}!`));
