const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://www.trackcorona.live",
    changeOrigin: true,
  })
);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
