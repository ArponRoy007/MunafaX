require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserModel } = require("./model/UserModel");

// ✅ Only ONE declaration of yahooFinance, right here at the top!
const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

const JWT_SECRET =  process.env.JWT_SECRET;

const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionsModel.js");
const { OrderModel } = require("./model/OrderModel.js");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

//connect mongo
mongoose
  .connect(url)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

app.use(cors());
app.use(bodyParser.json());

//data initialijation:
// app.get("/addHoldings", async (req, res) => { ... }
// app.get("/addPositions", async (req, res) => { ... }

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order saved!");
});

app.post("/sellOrder", async (req, res) => {
  const sellOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode, // "BUY" or "SELL"
  });

  await sellOrder.save();
  res.send("Order saved!");
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Signup successful",
      token,
    });
  } catch (err) {
    res.status(500).send("Signup failed");
  }
});

app.post("/deleteUser", async (req, res) => {
  try {
    console.log("Email received:", req.body.email);

    const result = await UserModel.deleteOne({ email: req.body.email });

    console.log("Delete result:", result);

    res.json({ message: "User deleted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).send("Delete failed");
  }
});

// ✅ Dynamic Live Price Route 
app.get("/livePrice/:symbol", async (req, res) => {
  try {
    const stockSymbol = req.params.symbol + '.NS'; 
    const quote = await yahooFinance.quote(stockSymbol);
    
    // I added a log so you can watch the prices flow into your terminal!
    console.log(`Successfully fetched ${stockSymbol}: ₹${quote.regularMarketPrice}`);
    
    res.json({ 
      price: quote.regularMarketPrice, 
      name: quote.longName 
    });
  } catch (error) {
    console.error("Error fetching price:", error);
    res.status(500).send("Error fetching price");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});