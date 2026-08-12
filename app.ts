// const express = require("express")
import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/hoidanit", (req, res) => {
    res.send("hello eric")
})

app.listen(PORT, () => {
    console.log(`My app is the running on port: ${PORT}`)
})