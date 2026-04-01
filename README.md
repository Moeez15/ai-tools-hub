# AI Tools Hub

A full-stack web application that catalogs and showcases AI tools. Users can browse a directory of popular AI tools, view details about each one, and explore categories, pricing models, and use cases.

## Tech Stack

- **Backend**: Node.js, Express.js v5
- **Frontend**: Vanilla JavaScript, Vite
- **Dev tooling**: Nodemon

## Project Structure

```
ai-tools-hub/
├── server/
│   ├── server.js          # Express server entry point
│   ├── routes/tools.js    # API route handlers
│   ├── data/tools.js      # Static tools data
│   └── public/            # Served frontend (built output)
│       └── scripts/       # Client-side JS
└── client/
    ├── src/style.css       # Global styles
    ├── index.html          # Home page
    └── vite.config.js      # Build config (outputs to ../server/public)
```

## Getting Started

### Prerequisites

- Node.js and npm

### Install dependencies

```bash
cd server && npm install
cd ../client && npm install
```

### Development

Run the backend and frontend dev servers in separate terminals:

```bash
# Terminal 1 — backend (port 3002)
cd server
npm start

# Terminal 2 — frontend dev server with HMR
cd client
npm run dev
```

The Vite dev server proxies `/tools` requests to `http://localhost:3002`.
