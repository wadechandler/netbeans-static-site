document.write("<tr>");
document.write("<td colspan=\"2\">");
document.write("<!-- top dl/banner -->");
document.write("<div class=\"platform-banner-bg\">");
document.write("<div class=\"platform-banner\">");
document.write("<div class=\"platform-banner-link\" id=\"banner-button\">");
document.write("<a href=\"https://platform.netbeans.org/platform-get.html\" class=\"nobg\"><img align=\"right\" src=\"https://netbeans.org/images_www/v6/get-platform.gif\" class=\"b-none\"></a>");
document.write("</div>");
document.write("<h1 id=\"banner-heading\">NetBeans Platform</h1>");
document.write("</div>");
document.write("</div>");
document.write("</td>");
document.write("</tr>");

/* based on the filename, switch the heading string in the top banner */
// get the filename from page url
var path = location.pathname;

// default title for / path 
var title = "NetBeans Platform";

// setup the title according to the regexp matching filename. Note that '/' must be escaped '\/'
if(path.match(/^\/platform\/index.html$/)) {
	title = "NetBeans Platform";
} else if (path.match(/^\/platform\/screenshots.html$/)) {
	title = "NetBeans Platform Showcase";
} else if (path.match(/^\/platform\/description.html$/)) {
	title = "NetBeans Platform Description";
} else if (path.match(/^\/platform\/platform-get.html$/)) {
	title = "How to Get the NetBeans Platform";
} else if (path.match(/^\/platform\/$/)) {
	title ="NetBeans Platform";
}

// and now set the title using DOM
document.getElementById('banner-heading').innerHTML = title;

// hide the 'get' button for the platform-get page itself
if (path.match(/^\/platform\/platform-get.html$/)) {
	document.getElementById('banner-button').innerHTML = "";
}
