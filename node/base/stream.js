// 流控制
var fs = require("fs");
var zlib = require("zlib"); // 做压缩的；
var data = "";
var writeData = "通过流写数据";
// 从流中读取数据
var readerStream = fs.createReadStream("test.json");
// 从流中写数据
var writeStream = fs.createWriteStream("output.txt");

readerStream.setEncoding("utf-8");
writeStream.write(writeData, "utf-8");
// 读数据的时间监听
readerStream.on("data", function (chunk) {
  data += chunk;
});

readerStream.on("end", function () {
  console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});

writeStream.end();
// 写数据的事件监听
writeStream.on("finish", function () {
  console.log("写入完成");
});

writeStream.on("error", function (err) {
  console.log(err.stack);
});

console.log("程序执行完毕");

// 管道流

readerStream.pipe(writeStream);

// 链式流

fs.createReadStream("input.txt")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));
