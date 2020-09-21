//给予样式
function loadStyle(url) {
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = url;
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}
var w = $(window).width(),
	h = $(window).height();
var ratio = h / w;
if (ratio < 1.5) {
	loadStyle("css/huawei.css"); //针对华为手机进行样式调整
} else if (ratio > 1.8) {
	loadStyle("css/index.css"); //正常引用的样式
}
