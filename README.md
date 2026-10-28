# lysimeter_admin

A web admin dashboard for lysimeter data, built with React and the AdminLTE theme. Measurements are fetched from a backend API and shown as interactive ApexCharts: line, gradient, semi-gauge and zoomable charts.

## Tech stack

React 16 (Create React App), [adminlte-2-react](https://github.com/jdbrooks/adminlte-2-react), ApexCharts and react-apexcharts, Axios, Moment.js. Linting uses ESLint with the Airbnb and Prettier configurations.

## Getting started

Requirements: Node.js and npm (or yarn), or Docker.

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser. The page reloads when you edit the source.

### With Docker

```bash
docker compose up --build
```

The app is served on port 3000 and also on 9080 of the host. The source folder is mounted into the container, so code changes are picked up.

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start the development server |
| `npm run build` | Create an optimised production build in `build/` |
| `npm test` | Run the tests in watch mode |
| `npm run eject` | Eject from Create React App (one-way) |

## Project structure

| Path | Purpose |
|---|---|
| `src/pages/Main/`, `src/pages/Dashboard/` | Application pages |
| `src/components/Chart/` | Chart components (`Basicline`, `Gradient`, `Semigauge`, `Zoomable`) |
| `src/services/api.js` | Axios client for the backend API |
| `public/` | Static assets |
| `Dockerfile`, `docker-compose.yml` | Container setup |
