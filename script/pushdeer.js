/*
屏蔽pushdeer中markdown内容的desp推广
2023.11.19
@color
*/


//----------------START----------------


// 获取相应数据
let color = JSON.parse($response.body);
// 获取请求地址
let URL = $request.url;

// 判断是否为匹配项
if (/^https:\/\/api2\.pushdeer\.com\/message\/list\?limit=?/.test(URL)) {
// 判断是否存在相应数据
if (color.hasOwnProperty("content") && color.content.hasOwnProperty("messages") && color.content.messages.hasOwnProperty("desp")){
delete color.content.messages.desp;
//color233.content.messages.desp = "@color";
}
console.log("🍭pushdeer拦截成功✨");
}
// 重写数据
$done({ body: JSON.stringify(color) });


//------------------END----------------
