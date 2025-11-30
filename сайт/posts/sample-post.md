# Первый пост — Как я начал учить программирование

Небольшая заметка-история и пример кода.

## Мини-руководство: простой сервер на Node.js

Пример показывает минимальный HTTP-сервер (если у вас установлен Node.js):

```javascript
// server.js
const http = require('http');
const port = 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from simple Node server');
}).listen(port, () => console.log(`Server running on http://localhost:${port}`));
```

Скопируйте код в `server.js` и запустите `node server.js`.
