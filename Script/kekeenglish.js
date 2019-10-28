var body = $response.body;
var url = $request.url;
const path1 = "/keke/mobile/index.php";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	obj.Data.is_vip = "1";
        obj.Data.end_time = "1666857999";
	body = JSON.stringify(obj);
 }
$done({body});
