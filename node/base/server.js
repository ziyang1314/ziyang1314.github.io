// 第一个应用

var http = require("http");
var Buffer = require("buffer");
console.log(http);
http
  .createServer(function (req, res) {
    // 获取请求体
    const { headers, method, url } = req;
    let body = [];
    req
      .on("error", (err) => {
        console.log(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        // 以上请求相关内容已经结束；
        // 响应头、状态
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With",
          "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
          "X-Powered-By": " 3.2.1",
          "Content-Type": "application/json;charset=utf-8",
        });
        // 响应数据
        res.end("这样可以写模拟数据，不过之后还要添加具体的请求方式之类的");
      });
  })
  .listen(8081);

// http 包含的内容
// {
//     _connectionListener: [Function: connectionListener],
//     METHODS: [
//       'ACL',         'BIND',       'CHECKOUT',
//       'CONNECT',     'COPY',       'DELETE',
//       'GET',         'HEAD',       'LINK',
//       'LOCK',        'M-SEARCH',   'MERGE',
//       'MKACTIVITY',  'MKCALENDAR', 'MKCOL',
//       'MOVE',        'NOTIFY',     'OPTIONS',
//       'PATCH',       'POST',       'PROPFIND',
//       'PROPPATCH',   'PURGE',      'PUT',
//       'REBIND',      'REPORT',     'SEARCH',
//       'SOURCE',      'SUBSCRIBE',  'TRACE',
//       'UNBIND',      'UNLINK',     'UNLOCK',
//       'UNSUBSCRIBE'
//     ],
//     STATUS_CODES: {
//       '100': 'Continue',
//       '101': 'Switching Protocols',
//       '102': 'Processing',
//       '103': 'Early Hints',
//       '200': 'OK',
//       '201': 'Created',
//       '202': 'Accepted',
//       '203': 'Non-Authoritative Information',
//       '204': 'No Content',
//       '205': 'Reset Content',
//       '206': 'Partial Content',
//       '207': 'Multi-Status',
//       '208': 'Already Reported',
//       '226': 'IM Used',
//       '300': 'Multiple Choices',
//       '301': 'Moved Permanently',
//       '302': 'Found',
//       '303': 'See Other',
//       '304': 'Not Modified',
//       '305': 'Use Proxy',
//       '307': 'Temporary Redirect',
//       '308': 'Permanent Redirect',
//       '400': 'Bad Request',
//       '401': 'Unauthorized',
//       '402': 'Payment Required',
//       '403': 'Forbidden',
//       '404': 'Not Found',
//       '405': 'Method Not Allowed',
//       '406': 'Not Acceptable',
//       '407': 'Proxy Authentication Required',
//       '408': 'Request Timeout',
//       '409': 'Conflict',
//       '410': 'Gone',
//       '411': 'Length Required',
//       '412': 'Precondition Failed',
//       '413': 'Payload Too Large',
//       '414': 'URI Too Long',
//       '415': 'Unsupported Media Type',
//       '416': 'Range Not Satisfiable',
//       '417': 'Expectation Failed',
//       '418': "I'm a Teapot",
//       '421': 'Misdirected Request',
//       '422': 'Unprocessable Entity',
//       '423': 'Locked',
//       '424': 'Failed Dependency',
//       '425': 'Unordered Collection',
//       '426': 'Upgrade Required',
//       '428': 'Precondition Required',
//       '429': 'Too Many Requests',
//       '431': 'Request Header Fields Too Large',
//       '451': 'Unavailable For Legal Reasons',
//       '500': 'Internal Server Error',
//       '501': 'Not Implemented',
//       '502': 'Bad Gateway',
//       '503': 'Service Unavailable',
//       '504': 'Gateway Timeout',
//       '505': 'HTTP Version Not Supported',
//       '506': 'Variant Also Negotiates',
//       '507': 'Insufficient Storage',
//       '508': 'Loop Detected',
//       '509': 'Bandwidth Limit Exceeded',
//       '510': 'Not Extended',
//       '511': 'Network Authentication Required'
//     },
//     Agent: [Function: Agent] { defaultMaxSockets: Infinity },
//     ClientRequest: [Function: ClientRequest],
//     IncomingMessage: [Function: IncomingMessage],
//     OutgoingMessage: [Function: OutgoingMessage],
//     Server: [Function: Server],
//     ServerResponse: [Function: ServerResponse],
//     createServer: [Function: createServer],
//     get: [Function: get],
//     request: [Function: request],
//     maxHeaderSize: [Getter],
//     globalAgent: [Getter/Setter]
//   }
