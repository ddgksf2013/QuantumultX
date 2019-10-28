/*猫耳asmr    
*/
var body = $response.body;
var url = $request.url;
const path1 = "/video/api/user/info";
const path2 = "/video/api/login/check";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	obj.data.user.vip = "3270511028";
	body = JSON.stringify(obj);
 }
if (url.indexOf(path2) != -1) {
	let obj = JSON.parse(body);
	obj.data.user.vip = "3270511028";
	body = JSON.stringify(obj);
 }
$done({body});

// From HoGer
