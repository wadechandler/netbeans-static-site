
function wineta(width,height,big) {
	var win=window.open('',null,'width=725, height=250');
	if (big==1) {
		win.document.write('\n<html><head><title>HTML for NetBeans banner</title>');
		win.document.write('\n<link REL="stylesheet" type="text/css" href="../../../netbeans.css"></head>');
		win.document.write('\n<body><textarea rows="10" cols="100">');
		win.document.write('\n<object width="'+width+'" height="'+height+'" id="netbeans-'+width+'x'+height+'" align="middle">');
		win.document.write('\n<param name="movie" value="netbeans-'+width+'x'+height+'.swf" />');
		win.document.write('\n<param name="quality" value="high" /><param name="bgcolor" value="#ffffff" />');
		win.document.write('\n<embed src="https://netbeans.org/images_www/collateral/worldtour-0708/netbeans-'+width+'x'+height+'.swf"');
		win.document.write('\nquality="high" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="netbeans-'+width+'x'+height+'"');
		win.document.write('\nalign="middle" type="application/x-shockwave-flash"');
		win.document.write('\npluginspage="http://www.macromedia.com/go/getflashplayer" />');
		win.document.write('\n</object>');
		win.document.write('\n</textarea><br/><br/>');
		win.document.write('\n Copy and paste this sample text to include the flash to your website.<br/><br/><br/>');
		win.document.write('\n</body></html>');
	} else {
		win.document.write('\n<html><head><title>HTML for NetBeans banner</title>');
		win.document.write('\n<link REL="stylesheet" type="text/css" href="../../../netbeans.css"></head>');
		win.document.write('\n<body><textarea rows="10" cols="100">');
		win.document.write('\n<object width="'+width+'" height="'+height+'" id="'+width+'x'+height+'script" align="middle">');
		win.document.write('\n<param name="movie" value="'+width+'x'+height+'script.swf" />');
		win.document.write('\n<param name="quality" value="high" /><param name="bgcolor" value="#ffffff" />');
		win.document.write('\n<embed src="https://netbeans.org/images_www/collateral/worldtour-0708/citySpecific/'+width+'x'+height+'script.swf"');
		win.document.write('\nquality="high" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+width+'x'+height+'script"');
		win.document.write('\nalign="middle" type="application/x-shockwave-flash"');
		win.document.write('\npluginspage="http://www.macromedia.com/go/getflashplayer" />');
		win.document.write('\n</object>');
		win.document.write('\n</textarea><br/><br/>');
		win.document.write('\n Copy and paste this sample text to include the flash to your website.<br/><br/><br/>');
		win.document.write('\n</body></html>');
	}
		win.document.close();
	}
//-->
