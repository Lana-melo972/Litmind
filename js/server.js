const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================================================
   ARQUIVOS DO LITMIND
   ========================================================= */

app.use("/css", express.static(path.join(__dirname, "..", "css")));
app.use("/img", express.static(path.join(__dirname, "..", "img")));
app.use("/js", express.static(path.join(__dirname, "..", "js")));
app.use("/livros", express.static(path.join(__dirname, "..", "livros")));
app.use("/pages", express.static(path.join(__dirname, "..", "pages")));


/* =========================================================
   PÁGINAS
   ========================================================= */

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "..", "pages", "introducao.html")
    );
});

app.get("/login", (req, res) => {
    res.sendFile(
        path.join(__dirname, "..", "pages", "login.html")
    );
});

app.get("/introducao", (req, res) => {
    res.sendFile(
        path.join(__dirname, "..", "pages", "introducao.html")
    );
});


/* =========================================================
   SERVIDOR
   ========================================================= */

app.listen(PORT, () => {
    console.log(`Servidor LITMIND rodando em http://localhost:${PORT}`);
});