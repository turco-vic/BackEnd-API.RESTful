require("dotenv").config();
const express = require("express");
const cors = require("cors");
const reportRoutes = require("./src/routes/reportRoutes");
const heroRoutes = require("./src/routes/heroRoutes");
const publisherRoutes = require("./src/routes/publisherRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/heroes", heroRoutes);
app.use("/api/publishers", publisherRoutes);
app.use("/api/report", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
