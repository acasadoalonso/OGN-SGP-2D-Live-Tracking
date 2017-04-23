var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': './config.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 
console.log(json);
function getbounds()
{
	var appareaogn  =  "&ne_lat="+json.bounds.ne_lat+"&ne_lon="+json.bounds.ne_lon+"&sw_lat="+json.bounds.sw_lat+"&sw_lon="+json.bounds.sw_lon+"&activeFlarm=";
	return(appareaogn);
}
function getappurl()
{
	var appurl   =  'http://'+json.socket.server;
	return(appurl);
}
function getappport()
{
	return(json.socket.port);
}

function getcenterzoom()
{
	return(json.center.zoom);
}
function getcenterlat()
{
	return(json.center.lat);
}
function getcenterlon()
{
	return(json.center.lon);
}
//console.log(getappurl())
//console.log(getappport())
//console.log(getbounds())
//console.log(getcenterzoom())
//console.log(getcenterlat())
//console.log(getcenterlon())