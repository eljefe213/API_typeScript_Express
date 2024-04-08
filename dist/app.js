"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Création intance app express
const app = (0, express_1.default)();
// Port d'écoute
const PORT = 8000;
app.get("/", (req, res) => {
    res.send("Hello World pas piqué des hannetons");
});
// app.use(router);
// Faire écouter l'app sur le port spécifié puis afficher msg
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
