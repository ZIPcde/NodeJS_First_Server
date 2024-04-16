const http = require('http');

let counterMain = 0;
let counterAbout = 0;
let counter404 = 0;

const server = http.createServer((req, res) => {
    console.log("Запрос получен");

    if (req.url === '/') {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        counterMain += 1;
        res.end(`<h1>Добро пожаловать на сайт!</h1><a href="http://localhost:3000/about">На страницу "О нас"</a><p>Данная страница просмотрена ${counterMain} раз</p>`);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        counterAbout += 1;
        res.end(`<h1>О нас</h1><a href="http://localhost:3000/">На "Главную" страницу</a><p>Данная страница просмотрена ${counterAbout} раз</p>`);
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        counter404 += 1;
        res.end(`<h1>Страница не найдена</h1><h2>Ошибка 404!</h2><a href="http://localhost:3000/">На "Главную" страницу</a><Br><a href="http://localhost:3000/about">На страницу "О нас"</a><p>Данная страница отображается в связи с тем что Вы не угадали URL нашего сервера ${counter404} раз</p>`);
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});