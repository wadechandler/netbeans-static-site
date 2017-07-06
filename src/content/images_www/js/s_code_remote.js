/* SiteCatalyst code version: H.19.BUILD DATE: 25-APR-2014 COPYRIGHT ORACLE CORP 2014 [UNLESS STATED OTHERWISE] */
/* Removed sungloal suite 25-APR-14 */
/************************** CONFIG SECTION ****************************************/
/* Specify the Report Suite(s) */
var s_account="sunnetbeansdev";
var sun_dynamicAccountSelection=true;
var sun_dynamicAccountList="sunnetbeans=netbeans.org;sunnetbeans=dlc.sun.com.edgesuite.net;sunnetbeansdev=.";
/* Specify the Site ID */
var s_siteid="netbeans:";
/* pageName Settings */
if (typeof s_pageType=='undefined'){
	if (typeof s_pageName=='undefined' || s_pageName=="") {
		var s_pageName=window.location.host+window.location.pathname;
		s_pageName=s_pageName.replace(/.netbeans.org/,':');
	}
}
var netbeans_host=location.hostname;
/* Remote Omniture JS call  */
var sun_ssl=(window.location.protocol.toLowerCase().indexOf("https")!=-1);
	if(sun_ssl == true) { var fullURL = "https://netbeans.org/images_www/js/metrics_group1.js"; }
		else { var fullURL= "http://netbeans.org/images_www/js/metrics_group1.js"; }
document.write("<sc" + "ript type=\"text/javascript\" src=\""+fullURL+"\"></sc" + "ript>");
/************************** END CONFIG SECTION **************************************/
/* Reset PageName Settings  */
function s_resetstandard(s) {
/* forums.netbeans.org ---> prop31  */
	if (netbeans_host=='forums.netbeans.org') {
		s_prop31=s_pageName;
		s_pageName=s_channel+" (site section)";
	}
}
