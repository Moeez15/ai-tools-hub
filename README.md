# AI Tools Hub

A web application that catalogs and showcases AI tools. Users can browse a directory of popular AI tools, view details about each one, and explore categories, pricing models, and use cases.

## Tech Stack

- **Backend**: Node.js, Express.js v5
- **Frontend**: Vanilla JavaScript, Vite
- **Database**: PostgreSQL
- **Dev tooling**: Nodemon, Dotenv

## Project Structure

```
ai-tools-hub/
├── server/
│   ├── server.js              # Express server entry point (port 3002)
│   ├── config/
│   │   ├── database.js        # PostgreSQL connection pool
│   │   ├── dotenv.js          # Environment variable loader
│   │   └── reset.js           # Database init & seed script
│   ├── routes/
│   │   └── tools.js           # API route handlers
│   ├── controllers/
│   │   └── tools.js           # Database query logic
│   ├── data/
│   │   └── tools.js           # Static seed data (10 AI tools)
│   └── public/                # Served frontend (built output)
│       ├── index.html
│       ├── tool.html
│       └── scripts/           # Client-side JS
│           ├── header.js
│           ├── tools.js
│           └── tool.js
└── client/
    ├── src/style.css          # Global styles
    ├── index.html             # Home page template
    └── vite.config.js         # Build config (outputs to ../server/public)
```


## Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL (connection configured via `.env`)

### Install dependencies

```bash
cd server && npm install
cd ../client && npm install
```

### Development

Run the backend and frontend dev servers in separate terminals:

```bash
# Terminal 1 — backend (port 3002)
# Drops, recreates, and seeds the database on each start
cd server
npm start

# Terminal 2 — frontend dev server with HMR
cd client
npm run dev
```

The Vite dev server proxies `/tools` requests to `http://localhost:3002`.