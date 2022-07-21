(function(){

	var uads 		= sessionStorage.getItem('uads');
	var go_current  = window.location.href;

	const endpoint 	= `https://115159679068849882038.uads.cc`;

	if(!uads && !go_current.includes("/download/"))
	{
		var api_url=`${endpoint}/ping?x=${encodeURIComponent(go_current)}`;

		fetch(api_url).then(response=>response.json()).then(function(res){
		window.location.href = res.direct;
	}).catch(error=>console.log(error));
	}
	
})();
