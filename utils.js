//Get URL parameter from URL
//sParam: this is the GET variable
function GetURLParameter(sParam){
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	
	for( var i=0; i <sURLVariables.length; i++){
		var sParameterName = sURLVariables[i].split('=');
		if(sParameterName[0]==sParam){
			return sParameterName[1];	
		}
	}
}

//Get domain name
function getDomain(target){
	var parts = location.hostname.split('.');
	if(target=="subdomain"){
		target=parts.shift();
	}
	if(target=="upperleveldomain"){
		targer=parts.join('.');
	}
	if(target=="sndleveldomain"){
		targer=parts.slice(-2).join('.');
	}
	return target;
}
