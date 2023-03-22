let http = require("http");
let server = http.createServer((req,res) => {
    res.write("<h1>Hello</h1>");
    console.log("connected");
    res.end();
}).listen(3002, () => {
    console.log("server connected on port 3002");
})
// in browser serch in URL :==>   localhost:3002