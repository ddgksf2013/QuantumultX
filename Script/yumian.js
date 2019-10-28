var body = $response.body;
var url = $request.url;
const path1 = "/api/sounds";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	for (i in obj.data) {
	obj.data[i].vip = "false";
	}
	body = JSON.stringify(obj);
 }
$done({body});
