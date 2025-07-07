const express = require("express");
const request = require("request");

const app = express();
const PORT = process.env.PORT || 3000;
const STREAM_URL = process.env.STREAM_URL || "http://213.149.164.247:8000/stream";

app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Access-Control-Allow-Origin", "*");
    request(STREAM_URL).pipe(res);
});

app.get("/", (req, res) => {
    res.send("🎧 Radio Proxy is running.");
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});