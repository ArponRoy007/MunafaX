# MunafaX 📈

### *"Munafa" (মুনাফা) = Profit · "X" = Exponential Growth & Next-Gen Execution*

> A full-stack stock trading platform — engineered with the MERN stack and deployed on Render.  
> Built to demonstrate advanced skills in modern web development, real-time data handling, and scalable cloud architecture.

---

## 🔗 Live Demo

| Service | URL |
|---------|-----|
| 🌐 Frontend (Landing) | `http://<your-aws-url>:3001` |
| 📊 Dashboard | `http://<your-aws-url>:3000` |
| ⚙️ Backend API | `http://<your-aws-url>:3002` |

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Deployment (AWS)](#deployment-aws)
- [Screenshots](#screenshots)
- [Known Issues & Roadmap](#known-issues--roadmap)
- [Author](#author)
- [Disclaimer](#disclaimer)

---

## 📖 About the Project

**MunafaX** is a comprehensive, full-stack stock trading web application inspired by modern Indian discount brokers. It replicates the core experience of a professional trading platform — from a polished marketing website to a fully functional trading dashboard with live NSE stock prices.

The primary goal of this project is to **showcase real-world full-stack development skills** including:

- Multi-app React architecture with shared authentication
- Real-time stock price fetching via the **Yahoo Finance API**
- Secure backend with **JWT authentication** and **bcrypt password hashing**
- Persistent data storage with **MongoDB Atlas**
- Scalable cloud deployment on **Render**
- Responsive UI with custom CSS, Bootstrap, and MUI

This project is built entirely as a **portfolio and educational demonstration** by [Arpon Roy](https://github.com/ArponRoy007).

---

## 🛠️ Tech Stack

### Frontend & Dashboard
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.4 | Core UI framework |
| React Router DOM | 7.13.1 | Client-side routing |
| Axios | 1.13.6 | HTTP API requests |
| Material UI (MUI) | 7.3.9 | UI component library |
| Chart.js + react-chartjs-2 | 4.5.1 / 5.3.1 | Data visualizations |
| Bootstrap | 5.x | Responsive grid & utilities |
| React Context API | built-in | Global Buy/Sell modal state |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | LTS | Runtime environment |
| Express | 5.2.1 | Web server framework |
| MongoDB + Mongoose | 9.2.4 | Database & ODM |
| JSON Web Token (JWT) | 9.0.3 | Authentication tokens |
| bcryptjs | 3.0.3 | Password hashing |
| yahoo-finance2 | 3.13.2 | Live NSE stock prices |
| dotenv | 17.3.1 | Environment variables |
| cors | 2.8.6 | Cross-origin requests |
| nodemon | 3.1.14 | Dev auto-restart |

### Cloud & DevOps
| Technology | Purpose |
|-----------|---------|
| Render | Server hosting |
| MongoDB Atlas | Cloud database |
| PM2 / systemd | Process management |

---

## ✨ Features

### 🌐 Landing Website (Frontend)
- **6 fully responsive pages:** Home, About, Products, Pricing, Support, Signup
- Reusable prop-driven `LeftSection` / `RightSection` product components
- MUI-powered signup form with full form validation
- JWT-based authentication flow with Axios
- Hero sections, awards, stats, pricing, education, and support portal
- Professional footer with legal disclaimer

### 📊 Trading Dashboard
- **6 dashboard views:** Summary, Orders, Holdings, Positions, Funds, Apps
- **Live stock watchlist** — prices auto-refresh every **5 seconds** via Yahoo Finance API
- **Draggable Buy/Sell modals** — floating action windows for placing orders
- **Holdings table** with real-time P&L calculation (profit/loss coloring)
- **Positions table** with live data from MongoDB
- **Chart.js visualizations** — Doughnut chart (watchlist) + Bar chart (holdings)
- **MUI Tooltips with Grow animations** on watchlist hover actions
- **React Context API** for global Buy/Sell window state management
- **JWT Protected Routes** — dashboard inaccessible without valid token
- NIFTY 50 & SENSEX indices bar in top navigation
- Fully custom CSS — 400+ lines, zero Bootstrap dependency in dashboard
- Mobile responsive layout

### ⚙️ Backend API
- User **Signup** with bcrypt password hashing
- **JWT token** generation with 1-day expiry
- **Live NSE stock price** endpoint via Yahoo Finance (`/livePrice/:symbol`)
- Full **CRUD** for Holdings, Positions, and Orders
- MongoDB Atlas cloud database with 4 collections
- Environment variable configuration for all secrets

---

## 🏗️ Project Architecture

```
MunafaX/
│
├── frontend/          → Landing website        (React, Port 3001)
├── dashboard/         → Trading dashboard      (React, Port 3000)
└── backend/           → REST API server        (Express, Port 3002)
```

The three apps communicate like this:

```
User Browser
     │
     ├──► frontend (Port 3001)
     │         │ Signup → POST /signup
     │         │ Redirects to Dashboard with JWT
     │
     ├──► dashboard (Port 3000)
     │         │ GET  /allHoldings
     │         │ GET  /allPositions
     │         │ GET  /livePrice/:symbol  (every 5s)
     │         │ POST /newOrder
     │         │ POST /sellOrder
     │
     └──► backend (Port 3002)
               │
               └──► MongoDB Atlas (Cloud DB)
               └──► Yahoo Finance API (Live Prices)
```

---

## 📁 Folder Structure

```
MunafaX/
│
├── frontend/
│   ├── public/
│   │   └── media/images/              → All static images & SVGs
│   ├── src/
│   │   ├── index.js                   → App entry, React Router setup
│   │   ├── index.css                  → Global styles
│   │   └── landing_page/
│   │       ├── Navbar.js
│   │       ├── Footer.js
│   │       ├── OpenAccount.js
│   │       ├── home/                  → Hero, Awards, Stats, Pricing, Education
│   │       ├── about/                 → Hero, Team
│   │       ├── products/              → Hero, LeftSection, RightSection, Universe
│   │       ├── pricing/               → Hero, Brokerage
│   │       ├── support/               → Hero, CreateTicket
│   │       └── signup/                → Signup.js (MUI + Axios + JWT)
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   ├── index.js                   → App entry, BrowserRouter
│   │   ├── index.css                  → 400+ lines custom CSS + responsive
│   │   ├── components/
│   │   │   ├── Home.js                → TopBar + Dashboard composer
│   │   │   ├── TopBar.js              → NIFTY/SENSEX + Menu
│   │   │   ├── Menu.js                → Navigation + auth + logout
│   │   │   ├── Dashboard.js           → Layout + nested routes
│   │   │   ├── Summary.js             → Portfolio summary
│   │   │   ├── WatchList.js           → Live polling watchlist
│   │   │   ├── GeneralContext.js      → React Context for Buy/Sell
│   │   │   ├── BuyActionWindow.js     → Draggable buy modal
│   │   │   ├── SellActionWindow.js    → Sell modal
│   │   │   ├── Holdings.js            → Holdings table + bar chart
│   │   │   ├── Positions.js           → Positions table
│   │   │   ├── Orders.js              → Orders view
│   │   │   ├── Funds.js               → Funds view
│   │   │   ├── DoughnoutChart.js      → Chart.js Doughnut wrapper
│   │   │   └── VerticalGraph.js       → Chart.js Bar wrapper
│   │   ├── utils/
│   │   │   └── ProtectedRoute.js      → JWT auth guard
│   │   └── data/
│   │       └── data.js                → Seed data (watchlist, holdings, positions)
│   └── package.json
│
└── backend/
    ├── index.js                       → Express server + all routes
    ├── model/
    │   ├── UserModel.js
    │   ├── HoldingModel.js
    │   ├── OrderModel.js
    │   └── PositionsModel.js
    ├── schemas/
    │   ├── HoldingSchema.js
    │   ├── OrderSchema.js
    │   └── PositionsSchema.js
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (free tier works)
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/ArponRoy007/MunafaX.git
cd MunafaX
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/munafax
JWT_SECRET=your_super_secret_jwt_key_here
PORT=3002
```

Start the backend server:

```bash
npm start
# Server runs on http://localhost:3002
```

---

### 3. Seed the Database (First Time Only)

After the backend is running, populate initial holdings and positions data by calling:

```bash
# Using curl or any API client (Postman/Thunder Client)
GET http://localhost:3002/addHoldings
GET http://localhost:3002/addPositions
```

> ⚠️ These routes are commented out in `index.js`. Uncomment them, run once, then comment back.

---

### 4. Setup Frontend

```bash
cd ../frontend
npm install
npm start
# Runs on http://localhost:3001
```

---

### 5. Setup Dashboard

```bash
cd ../dashboard
npm install
npm start
# Runs on http://localhost:3000
```

---

### 6. Open in Browser

| App | URL |
|-----|-----|
| Landing Website | http://localhost:3001 |
| Dashboard | http://localhost:3000 |
| Backend API | http://localhost:3002 |

---

## 🔐 Environment Variables

### Backend `.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster...` |
| `JWT_SECRET` | Secret key for JWT signing | `mySecretKey123` |
| `PORT` | Backend server port | `3002` |

> ⚠️ **Never commit your `.env` file.** It is already in `.gitignore`.

---

## 📡 API Documentation

### Base URL
```
http://localhost:3002
```

---

### Auth Routes

#### `POST /signup`
Register a new user.

**Request Body:**
```json
{
  "username": "arpon",
  "email": "arpon@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Signup successful",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

### Data Routes

#### `GET /allHoldings`
Returns all holdings from MongoDB.

**Response:**
```json
[
  { "name": "INFY", "qty": 1, "avg": 1350.5, "price": 1555.45, "net": "+15.18%", "day": "-1.60%" }
]
```

---

#### `GET /allPositions`
Returns all open positions from MongoDB.

**Response:**
```json
[
  { "product": "CNC", "name": "EVEREADY", "qty": 2, "avg": 316.27, "price": 312.35 }
]
```

---

#### `GET /livePrice/:symbol`
Fetches **real-time NSE stock price** via Yahoo Finance API.

**Example:**
```
GET /livePrice/INFY
```

**Response:**
```json
{
  "price": 1578.30,
  "name": "Infosys Limited"
}
```

---

### Order Routes

#### `POST /newOrder`
Place a new buy order.

**Request Body:**
```json
{
  "name": "INFY",
  "qty": 2,
  "price": 1555.45,
  "mode": "BUY"
}
```

---

#### `POST /sellOrder`
Place a sell order.

**Request Body:**
```json
{
  "name": "TCS",
  "qty": 1,
  "price": 3194.8,
  "mode": "SELL"
}
```

---

## 🗄️ Database Schema

### Users Collection
```js
{
  username: String,
  email: String,
  password: String  // bcrypt hashed
}
```

### Holdings Collection
```js
{
  name: String,     // Stock symbol e.g. "INFY"
  qty: Number,      // Quantity held
  avg: Number,      // Average buy price
  price: Number,    // Current market price
  net: String,      // Net change e.g. "+15.18%"
  day: String       // Day change e.g. "-1.60%"
}
```

### Positions Collection
```js
{
  product: String,  // "CNC" or "MIS"
  name: String,     // Stock symbol
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean
}
```

### Orders Collection
```js
{
  name: String,     // Stock symbol
  qty: Number,
  price: Number,
  mode: String      // "BUY" or "SELL"
}
```

---

## ☁️ Deployment (AWS)

MunafaX is deployed on **AWS EC2** (Ubuntu). Here is the deployment overview:

### Steps

**1. Launch EC2 Instance**
- AMI: Ubuntu 22.04 LTS
- Instance type: t2.micro (free tier)
- Open ports: 22 (SSH), 3000, 3001, 3002 in Security Group

**2. Connect & Install Dependencies**
```bash
ssh -i your-key.pem ubuntu@<ec2-public-ip>
sudo apt update
sudo apt install nodejs npm git -y
```

**3. Clone & Install**
```bash
git clone https://github.com/ArponRoy007/MunafaX.git
cd MunafaX/backend && npm install
cd ../frontend && npm install && npm run build
cd ../dashboard && npm install && npm run build
```

**4. Set Environment Variables**
```bash
cd backend
nano .env
# Add MONGO_URL, JWT_SECRET, PORT
```

**5. Run with PM2**
```bash
npm install -g pm2
pm2 start backend/index.js --name munafax-backend
pm2 serve frontend/build 3001 --name munafax-frontend --spa
pm2 serve dashboard/build 3000 --name munafax-dashboard --spa
pm2 save
pm2 startup
```

---

## 📸 Screenshots

> _Add screenshots here after deployment_

| Page | Preview |
|------|---------|
| 🏠 Home Page | _(screenshot)_ |
| 📊 Dashboard Summary | _(screenshot)_ |
| 📈 Holdings View | _(screenshot)_ |
| 💹 Live Watchlist | _(screenshot)_ |
| 🛒 Buy Modal | _(screenshot)_ |
| 📝 Signup Page | _(screenshot)_ |

---

## 🗺️ Known Issues & Roadmap

### ⚠️ Known Issues

| Issue | Status |
|-------|--------|
| Token passed as URL query param (security risk) | 🔧 To Fix |
| `deleteUser` used as logout — deletes account | 🔧 To Fix |
| All API routes lack JWT middleware protection | 🔧 To Fix |
| Hardcoded `localhost` URLs — needs `.env` config | 🔧 To Fix |
| No `/login` endpoint in backend | 🔧 To Fix |
| NIFTY/SENSEX values are static in TopBar | 🔧 To Fix |

### 🚀 Upcoming Features

- [ ] Add `/login` endpoint with JWT
- [ ] Protect all API routes with JWT middleware
- [ ] Replace `deleteUser` logout with proper session invalidation
- [ ] Move all hardcoded URLs to `.env` variables
- [ ] Add login page to frontend
- [ ] Live NIFTY/SENSEX index prices in TopBar
- [ ] Order history with timestamps
- [ ] User-specific holdings and positions
- [ ] WebSocket support for real-time price streaming
- [ ] Docker containerization
- [ ] CI/CD pipeline with GitHub Actions

---

## 👨‍💻 Author

**Arpon Roy**  
Full-Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/arpon-roy-60784a301)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?logo=github)](https://github.com/ArponRoy007)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?logo=twitter)](https://twitter.com/royarpon007)

---

## ⚠️ Disclaimer

> **MunafaX is not a real financial institution, brokerage, or trading entity.**  
> This is a full-stack web application built entirely for **educational and portfolio purposes**.  
> No real trading, investing, or monetary transactions take place here.  
> Do not enter any real personal or financial information.  
> This is a strictly non-commercial personal project by **Arpon Roy**.

---

<div align="center">

**⭐ If you found this project useful, please give it a star!**

Made with ❤️ by [Arpon Roy](https://github.com/ArponRoy007)

</div>