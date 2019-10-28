/*随手记
*/
var body = $response.body;
var url = $request.url;
const path = "/api/v2/user/status";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj["pro"] = "true";
  	obj["needSubscribe"] = "false";
  	obj["subscribeType"] = "yearly";
	obj["proEndDate"] = "2020-01-02";
	body = JSON.stringify(obj);
 }
$done({body});

// From HoGer
