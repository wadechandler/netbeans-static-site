/*********************************************************************
--- flashcommand : fscommand handler functions ---
version 5.0.0
This is the general fscommand handler for ALL output formats
*********************************************************************/

///////////////////////////////////////////////////////////////////////////
// Global Vars
///////////////////////////////////////////////////////////////////////////
var DATA_PATH = "data/swf/";
var FLASH_WND_WIDTH = 40;
var FLASH_WND_HEIGHT = 30;

var SWF_BASE_WIDTH		= 980;	
var SWF_BASE_HEIGHT		= 640;
var WEBOBJ_LEFT			= 254;
var WEBOBJ_TOP			= 36;

if (FF1 || NS6plus)
{
	WEBOBJ_LEFT = 253;
	WEBOBJ_TOP = 34;
}

if (!g_bScaleSwf)
{
	WEBOBJ_LEFT -= 8;
	WEBOBJ_TOP -= 4;
	strSwfWidth = 992;
	strSwfHeight = 652;
}

var WEBOBJ_DISPLAY3_XPOS_ADJUST	= 150;
var WEBOBJ_DISPLAY3_YPOS_ADJUST	= 20;

var WEBOBJ_DISPLAY2_XPOS_ADJUST	= 119;

// Browser Resize
var g_ResizeTimeout;
var g_strQMPath;

///////////////////////////////////////////////////////////////////////////
// Utility Functions
///////////////////////////////////////////////////////////////////////////

function Click()
{
	alert("Test");
}


function CreateBookmark(args, bSlide)
{
	if (!Opera7plus && IE4plus)
	{
		var nSlideNum = args.substring(0,args.indexOf("|"));
		var strTitle = args.substring((args.indexOf("|")+1),args.length);

		var _proto 	= document.location.protocol;
		var _host 	= document.location.host;
		var _pathname	= document.location.pathname;
		var _search = document.location.search;
		var newpath  = "";
		var newUrl  = "";
		var nPos = 0;

		nPos = _pathname.lastIndexOf("/");

		if (nPos <= 0) 
		{
			nPos = _pathname.lastIndexOf("\\"); 
		}
		if ( nPos < _pathname.length) 
		{    
			// if / is not the last char grab the trailing "/"
			nPos++;
		}
		
		if (_search.indexOf("akpDocumentID",0) < 0) 
		{
			newpath = _pathname.substr(0, nPos) + "player.html";
			newUrl = _proto + "//" + _host + newpath +"?slide=" + nSlideNum;
		} 
		else 
		{
			did = _search.substring((_search.lastIndexOf("akpDocumentID") + ("akpDocumentID").length+1), _search.length);
			newpath = "/Portal/Storage/DownloadDocument.aspx?DocumentID=" + did;
			newUrl = _proto+"//"+ _host + newpath + "?slide="+ nSlideNum;
		}

		if (bSlide)
		{
			strTitle = strTitle + " - Powered by Articulate ";
		}
		else
		{
			strTitle = strTitle + " Slide "+ nSlideNum +" - Powered by Articulate ";
		}

		window.external.AddFavorite(newUrl, strTitle);
	}
	else
	{
		var strErr = "Your browser does not support automatic bookmarking.\nTo bookmark this presentation, please create a bookmark \non the web page that launched this window.";
		alert(strErr);
	}
}


function OpenFlashObjectWnd(args)
{
	str = args;
	params = str.split("|");

	var strContainerType = params[0];	// Unused
	var strFilename = params[1];
	var nXPos = parseInt(params[2]);	// Unused
	var nYPos = parseInt(params[3]);	// Unused
	var nWidth = parseInt(params[4]);
	var nHeight = parseInt(params[5]);
	var strBrowserOptions = params[6];

	var  re = /width=0/gi;
	ww = strBrowserOptions.search(re);
	re = /height=0/gi;
	wh = strBrowserOptions.search(re);

	// If the width and height are 0 set to Full screen
	if ((ww >= 0 && wh >= 0) || (nWidth ==0 && nHeight==0))
	{
		nWidth = window.screen.availWidth;
		nHeight = window.screen.availHeight;
	}
	else
	{
		nWidth += FLASH_WND_WIDTH;
		nHeight += FLASH_WND_HEIGHT;
	}
	
	// Put the width,height settings into opener options here,
	strBrowserOptions += ", width=" + nWidth + ",height=" + nHeight;

	// Get the HTML filename
	var filebase = strFilename.substring(0,strFilename.toLowerCase().indexOf(".swf"));

	// Display the Flash Object
	var wndFlashObj = window.open(DATA_PATH + filebase + ".html", "flashobjectwin", strBrowserOptions);


	wndFlashObj.focus();
}

function OpenWebObjectWnd(args)
{
	str = args;
	params = str.split("|");

	var strContainerType = params[0]; 	// Unused
	var strObjectType = params[1];		// Unused
	var nXPos = params[2];			// Unused
	var nYPos = params[3];			// Unused
	var nWidth = params[4];
	var nHeight = params[5];
	var strBrowserOptions = params[6];
	var strMode = params[7];  		// Unused
	var strUrl = params[8];
	  
	//Check for repository:
	if (strUrl.toLowerCase().indexOf("repository://") == 0) 
	{
		strUrl = "/Portal/Storage/Viewers/ArtPlayer/FollowLink.aspx?file=" + strUrl;
	}

	var  re = /width=0/gi;
	ww = strBrowserOptions.search(re);
	re = /height=0/gi;
	wh = strBrowserOptions.search(re);

	// If the width and height are 0 set to Full screen
	if ((ww >= 0 && wh >= 0) || (nWidth ==0 && nHeight==0))
	{
		nWidth = window.screen.availWidth;
		nHeight = window.screen.availHeight;
		strBrowserOptions += ",width="+nWidth+",height="+nHeight+",left=0,top=0,screenX=0,screenY=0";
	}
	else 
	{
		strBrowserOptions += ",width=" + nWidth + ",height=" +nHeight;
	}
	  
	//--Setup the Window.open Target Url to popup and populate:
	var wndWebObj = window.open(strUrl, "mediaobjectwin", strBrowserOptions);
	wndWebObj.focus();
}

function ShowWebObjectDiv(args)
{
	str = args;
	params = str.split("|");
	var strContainerType = params[0]; 	// Unused
	var strObjectType = params[1];		// Unused
	var nXPos = parseInt(params[2]);
	var nYPos = parseInt(params[3]);
	var nWidth = parseInt(params[4]);
	var nHeight = parseInt(params[5]);
	var strBrowserOptions = params[6];
	var strMode = params[7]; 		// scale modes
	var strUrl = params[8];

	//Check for repository:// string//
	if (strUrl.toLowerCase().indexOf("repository://") == 0)
	{
		strUrl = "/Portal/Storage/Viewers/ArtPlayer/FollowLink.aspx?file=" + strUrl;
	}

	//- (iframe) -//
	if (g_bWebObject) 
	{
		// Set the global values
		g_bWebObjDisplay = true;
		g_nWebXPos = nXPos;
		g_nWebYPos = nYPos;
		g_nWebWidth = nWidth;
		g_nWebHeight = nHeight;
		g_strWebMode = strMode;

		// Set the URL
		var myIFrame = document.getElementById("eIFContent");
		myIFrame.src = strUrl;

		// Adjust the Size and position
		ResizeWebObject();

	} 
	else 
	{
		//alert("Can't find a media layer. Opening in a new window instead.");
		window.open(strUrl,   "webobjectwin",   "width=700,height=500,"+strBrowserOptions);
	}

}

function HideWebObjectDiv(args)
{
	//clear the iframe
	if (g_bWebObject) 
	{
		g_bWebObjDisplay = false;

		// Make the WebObject Small for Firefox
		g_nWebWidth = 5;
		g_nWebHeight = 5;

		ResizeWebObject();

		// Set the layer to be invisible
		var layerWebObject = document.getElementById("eLayer1");
		layerWebObject.style.visibility = 'hidden';

		// Fill with blank page
		var myIFrame = document.getElementById("eIFContent");
		myIFrame.src = "player/blank.html";

	}
}

function SetDisplayMode(args)
{
	var params = args.split("|");

	currentDisplayMode = params[0];

	if (g_bWebObjDisplay)
	{
		ResizeWebObject();
	}
}

function ShowMediaObject(args)
{
	//rightclick insert webobject, display in new window//
	str = args;
	params = str.split("|");
	var _url = params[0];
	var _options = params[1];

	//--Launch a new window with the specifed parameters and content:
	window.open(_url,   "mediaobjectwin",   _options);
}

function SendQuiz()  
{
	g_strQuizResults = g_strQuizResults.replace(/'/g,"&#39;");

	var sHTML = "";
	sHTML += '<FORM id="formQuiz" method="POST" action="mailto:' + g_strEmail + '?subject=' + g_strSubject + '" enctype="text/plain">';
	sHTML += '<INPUT TYPE="hidden" NAME="Quiz Results" VALUE=\'' + g_strQuizResults + '\'>';
	sHTML += '<br><input type="submit"><br>';
	sHTML += '</FORM>';
	document.getElementById("divQuiz").innerHTML = sHTML;
	document.getElementById("divQuiz").document.getElementById("formQuiz").submit();
}

function GetBasePath()
{
	var strFullPath = document.location.href;
	var nPos1 = -1;
	var nPos2 = -1;

	nPos1 = strFullPath.lastIndexOf("\\");
	nPos2 = strFullPath.lastIndexOf("/");

	if (nPos2 > nPos1)
	{
		nPos1 = nPos2;
	}

	if (nPos1 >= 0)
	{
		strFullPath = strFullPath.substring(0, nPos1 + 1);
	}

	return(strFullPath);
}


///////////////////////////////////////////////////////////////////////////
// Resize Event
///////////////////////////////////////////////////////////////////////////

var g_resizeTimer;
var g_nWebXPos = 0;
var g_nWebYPos = 0;
var g_nWebWidth = 0;
var g_nWebHeight = 0;
var g_bWebObjDisplay = false;
var g_strWebMode = "scaleall";

function ResizeWebObject()
{
	var layerWebObject = document.getElementById("eLayer1");
	var myIFrame = document.getElementById("eIFContent");

	var nWidth = g_nWebWidth;
	var nHeight = g_nWebHeight;
	var nXPos = g_nWebXPos;
	var nYPos = g_nWebYPos;

	// Calculate the Ratio and Offsets
	var swfMovie = thisMovie('player');

	if (!swfMovie.clientHeight)
	{
		swfMovie = document.getElementById("player");
	}

	var nSwfXPos = swfMovie.offsetLeft;
	var nSwfYPos = swfMovie.offsetTop;
	var nSwfHeight = swfMovie.clientHeight;
	var nSwfWidth = swfMovie.clientWidth;

	if (isMac && IE5)
	{
		nSwfWidth = swfMovie.width;
		if (swfMovie.width == "100%")
		{
			nSwfWidth = document.body.clientWidth;
			
		}
		
		nSwfHeight = swfMovie.height;
		if (swfMovie.height == "100%")
		{
			nSwfHeight = document.body.clientHeight;
		}
	}

	var nWRatio = nSwfWidth / SWF_BASE_WIDTH;
	var nHRatio = nSwfHeight / SWF_BASE_HEIGHT;
	var nRatio = 1;
	var nLeftOffset = 0;
	var nTopOffset = 0;

	// Adjust the Width and the height for firefox
	if (FF1 || NS6plus)
	{
		nWidth -= 5;
		nHeight -= 5;
	}

	//Handle special Mode 2 and 3 cases:
	if (currentDisplayMode == 3) 
	{
		nXPos -= WEBOBJ_DISPLAY3_XPOS_ADJUST;
		nYPos -= WEBOBJ_DISPLAY3_YPOS_ADJUST;
		nXPos *= 1.13;
		nYPos *= 1.13;
		nWidth *= 1.13;
		nHeight *= 1.13;
	}
	else if (currentDisplayMode == 2) 
	{
		nXPos -= WEBOBJ_DISPLAY2_XPOS_ADJUST;

	}

	if (nHRatio < nWRatio)
	{
		nRatio = nHRatio;
		nLeftOffset = (nSwfWidth - (SWF_BASE_WIDTH * nRatio)) / 2;
	}
	else
	{
		nRatio = nWRatio;
		nTopOffset = (nSwfHeight - (SWF_BASE_HEIGHT * nRatio)) / 2;
	}

	strMode = "scaleall";

	if ((g_strWebMode == "") || (g_strWebMode == "scaleall")) 
	{
		factorSize = nRatio;  
		factorPosition = nRatio;
	}
	if (g_strWebMode =="scaleposition")
	{
		factorSize = 1;  
		factorPosition = nRatio;
	}
	if (g_strWebMode == "scalesize")  
	{
		factorSize = nRatio;  
		factorPosition = 1;
	}
	if (g_strWebMode == "absolute") 
	{
		factorSize = 1;  
		factorPosition = 1;
	}

		
	iLeft = (WEBOBJ_LEFT + nXPos) * factorPosition + nLeftOffset;
	iTop = (WEBOBJ_TOP + nYPos) * factorPosition + nTopOffset;
	iWidth = nWidth * factorSize;
	iHeight = nHeight * factorSize;

	//Resize the layer
	layerWebObject.style.left = nSwfXPos + iLeft;
	layerWebObject.style.top = nSwfYPos + iTop;
	layerWebObject.style.width = iWidth;
	layerWebObject.style.height = iHeight;
	layerWebObject.style.visibility = 'visible';

	// Resize the IFrame
	myIFrame.style.width = iWidth;
	myIFrame.style.height = iHeight;

}

function WindowResize()
{
	// Notify the swf that we have resized.  This is for 
	// text that does not scale properly
	if (g_bScaleSwf)
	{
		// Make sure that we don't send 100 resize messages in a row
		clearTimeout(g_ResizeTimeout);
		g_ResizeTimeout = setTimeout("NotifySwfResize()", 200);
		
	}

	// Resize the Web Object
	if (g_bWebObjDisplay)
	{
		ResizeWebObject();
	}
}

function NotifySwfResize()
{
	var swfMovie = thisMovie('player');
	swfMovie.SetVariable("g_Resize.Trigger", "1");
}

function SetBgColor(strColor)
{
	var strTemp = "";

	if (IE4 && !Opera && !isMac)
	{
		strTemp = "0x" + strColor;
		document.bgColor = parseInt(strTemp);
	}
	else
	{
		strTemp = "#" + strColor;
		document.bgColor = strTemp;
	}	
}

window.onresize = WindowResize;

var g_strAttachment = "";

function OpenAttachment()
{
	if (IESP2)
	{
		try
		{
			window.open('player/attach.html?' + GetBasePath() + g_strAttachment,"attach")
		}
		catch (e)
		{
			if (e.number == -2147024891)
			{
				alert("For viewing attachments when presentation is not playing from a website, view the Knowledge Base article located at http://kb.articulate.com/kb/000669.php")
			}
		}
	}
	else
	{
		window.open(GetBasePath() + g_strAttachment);
	}
}

////////////////////////////////////////////////////////////////////////////////
// Results Screen Code
////////////////////////////////////////////////////////////////////////////////

var g_arrResults = new Array();
var g_oQuizResults = new Object();

function QuestionResult(nQuestionNum, strQuestion, strResult, strCorrectResponse, strStudentResponse, nPoints)
{
	if (nPoints < 0)
	{
		nPoints = 0;
	}
	if (strCorrectResponse == "")
	{
		strCorrectResponse = "&nbsp;";
	}

	this.nQuestionNum = nQuestionNum
	this.strQuestion = strQuestion;
	this.strCorrectResponse = strCorrectResponse;
	this.strStudentResponse = strStudentResponse;
	this.strResult = strResult;
	this.nPoints = nPoints;
	this.bFound = false;
}

function StoreResult(args)
{
	var arrParams = args.split("|$:$|");
	var oQuestionResult = new QuestionResult(parseInt(arrParams[0]) + 1, arrParams[1], arrParams[2], arrParams[3], arrParams[4] ,arrParams[5]);
	var nIndex = g_arrResults.length;

	// Lets see if we have answered the question before

	for (var i = 0; i < g_arrResults.length; i++)
	{
		if (g_arrResults[i].nQuestionNum == oQuestionResult.nQuestionNum)
		{
			nIndex = i;
			break;
		}
	}

	g_arrResults[nIndex] = oQuestionResult;

}

function StoreQuizResult(args)
{
	var arrParams = args.split("|$:$|");

	g_oQuizResults.dtmFinished = new Date();
	g_oQuizResults.strResult = arrParams[0];
	g_oQuizResults.strScore = arrParams[1];
	g_oQuizResults.strPassingScore = arrParams[2];
}

function ShowResult(args)
{
	var arrData = args.split(";");
	
	if (!g_oQuizResults.oOptions)
	{
		g_oQuizResults.oOptions = new Object();
	}

	g_oQuizResults.oOptions.bShowUserScore = (arrData[0] == "1");
	g_oQuizResults.oOptions.bShowPassingScore = (arrData[1] == "1");
	g_oQuizResults.oOptions.bShowShowPassFail = (arrData[2] == "1");
	g_oQuizResults.oOptions.bShowQuizReview = (arrData[3] == "1");
	g_oQuizResults.oOptions.strResult = arrData[4];
	g_oQuizResults.oOptions.strName = arrData[5];

	window.open(GetBasePath() + g_strQMPath + "report.html", "Reports")
}

////////////////////////////////////////////////////////////////////////////////
// Zoom code
////////////////////////////////////////////////////////////////////////////////

var g_oZoomInfo = new Object();
var g_wndZoom;

function PopZoomImage(strFileName, nWidth, nHeight)
{
	var strScroll = "0";
	g_oZoomInfo.strFileName = strFileName;
	g_oZoomInfo.nWidth = parseInt(nWidth);
	g_oZoomInfo.nHeight = parseInt(nHeight);

	if (g_oZoomInfo.nWidth > screen.availWidth)
	{
		g_oZoomInfo.nWidth = screen.availWidth;
		strScroll = "1";
	}

	if (g_oZoomInfo.nHeight > screen.availHeight)
	{
		g_oZoomInfo.nHeight = screen.availHeight;
		strScroll = "1";
	}


	var strOptions = "width=" + g_oZoomInfo.nWidth +",height=" + g_oZoomInfo.nHeight + ", status=0, toolbar=0, location=0, menubar=0, scrollbars=" + strScroll;

	if (g_wndZoom)
	{
		try
		{
			g_wndZoom.close()
		}
		catch (e)
		{
		}
	}

	g_wndZoom = window.open(GetBasePath() + g_strQMPath + "zoom.html", "Zoom", strOptions);
}

///////////////////////////////////////////////////////////////////////////
// Flash Command Handler
///////////////////////////////////////////////////////////////////////////

function player_DoFSCommand(command, args) 
{
	switch (command)
	{
		case "bookmark_presentation":
			CreateBookmark(args, false);
			break;

		case "bookmark_slide":
			CreateBookmark(args, true);
			break;

		case "hyper_flashobject":
			OpenFlashObjectWnd(args);
			break;

		case "hyper_webobject_newwindow":
			OpenWebObjectWnd(args);
			break;

		case "hyper_webobject_inplayer":
			ShowWebObjectDiv(args);
			break;

		case "hyper_webobject_inplayer_hide":
			HideWebObjectDiv(args);
			break;

		case "ART_displaymode":
			SetDisplayMode(args);
			break;

		case "hyper_mediaobject":
			ShowMediaObject(args);
			break;

		case "ART_CloseAndExit":
			if (!g_bLMS)
			{
				top.window.close();
	 		}
			break;
		case "ART_SetBgBolor":
				SetBgColor(args);
			break;

		case "ART_Attachment":
			g_strAttachment = args;
			if (IESP2)
			{
				OpenAttachment()
			}
			else
			{
				setTimeout("OpenAttachment()", 100)
			}
			break;

		// Email Handlers
		case "emailEmail":
			g_strEmail = args;
			break;

		case "QuizResults":
		case "Quiz Results":
			g_strQuizResults = args;
			break;

		case "emailSubject":
			g_strSubject = args;
			break;

		case "emailSubmit":
			SendQuiz();
			break;

		// QM Handlers
		case "SetQMPath":
			g_strQMPath = args;
			break;

		case "StoreQuestionResult":
			StoreResult(args);
			break;

		case "StoreQuizResult":
			StoreQuizResult(args);
			break;

		case "DisplayPrintScreen":
			ShowResult(args);
			break;

		case "ART_QMAttachment":
			g_strAttachment = g_strQMPath + args;

			if (IESP2)
			{
				OpenAttachment()
			}
			else
			{
				setTimeout("OpenAttachment()", 100)
			}

			break;

		case "QM_ZoomImage":
			var arrData = args.split(";");
			PopZoomImage(arrData[0], arrData[1], arrData[2]);
			break;

	}

	if (g_bLMS)
	{
		customFScommandHandler(command, args);   //found in Lms.js
	}
}
