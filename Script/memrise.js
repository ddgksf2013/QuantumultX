let url = $request.url;
let obj= JSON.parse($response.body);
var cons1 = "me";
var cons2 = "dashboard";
var cons3 = "leaderboards";
if(url.indexOf(cons1) != -1)
{
obj.profile.is_pro= true;
body= JSON.stringify(obj);
}
if(url.indexOf(cons2) != -1)
{
obj.user.is_premium= true;
body= JSON.stringify(obj);
}
if(url.indexOf(cons3) != -1)
{
obj.users[0].is_premium= true;
body= JSON.stringify(obj);
}
$done({body});
