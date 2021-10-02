    var go_current     	= window.location.href;
    var reff     	= document.referrer;
    

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

    var direct_link_ads = rChoice([
                            "https://stunthedge.com/fz6cxwmi?key=5ee5e913b3e852805476f79565060a05",
                            "https://stunthedge.com/fz6cxwmi?key=5ee5e913b3e852805476f79565060a05",
                        ]);

    var ars             = rChoice([
                            "https://mobillegends.net",
                            "https://karirjet.com",
                        ]);


    var dir_type        = "refresh"; //refresh, domain, path, arsae


    if(dir_type == 'arsae')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }
