import express from "express";
import os from "os";
export const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get("/cpu", (req, res) => {
    for (let i = 0; i < 1_000_000_00; i++) {
        Math.random();
    }
    res.send("Heavy task done ✅");
});


app.get("/host", (req, res) => {
    res.send(os.hostname());
});