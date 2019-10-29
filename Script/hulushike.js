var body = $response.body;
var url = $request.url;
const path1 = "api";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	for (i in obj.result.resource.items) {
	for (j in obj.result.resource.items[i].articles){
	obj.result.resource.items[i].articles[j].isFree = "1";
	}	
	}
	obj.result.isFree = "1";
  	obj.result.isBuy = "1";
	obj.result.user.isBuy = "1";
	obj.result.user.userRight = "1";
  	obj.result.userRight = "1";
	body = JSON.stringify(obj);
 }
$done({body});
