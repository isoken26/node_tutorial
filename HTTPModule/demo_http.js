const http = require('http');

//サーバーオブジェクトの作成
http.createServer((req, res) => {
    res.write('Hellow World!'); //クライアントへのレスポンスを記述
    res.end(); //レスポンスの終了
}).listen(8080); //サーバーオブジェクトはポート8080番で待ち受け