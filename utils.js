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

//Function to detect orientation. Useful for use on responsive
// to use, type the following and of course set the width, initial-scale etc respectively:
/*********************************/
//window.addEventListener('orientationchange', doOnOrientationChange);
//doOnOrientationChange();
/*********************************/
function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
       // alert('landscape');
		document.getElementById("viewport").setAttribute("content", "width=device-width,  initial-scale=0.83, maximum-scale=1, minimum-scale=0.83");
        break; 
      default:
        //alert('portrait');
		document.getElementById("viewport").setAttribute("content", "width=740,  initial-scale=0.61, maximum-scale=1, minimum-scale=0.61");
        break; 
    }
  }
