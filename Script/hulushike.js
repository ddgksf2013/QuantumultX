var body = $response.body;
var url = $request.url;
const path1 = "api";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	for (i in obj.data) {
	obj.result.isFree = "1";
  obj.result.isBuy = "1";
  obj.result.userRight = "1";
	}
	body = JSON.stringify(obj);
 }
$done({body});
