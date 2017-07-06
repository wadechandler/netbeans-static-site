// Focus on first form fields in login, password edit 
// and request pages. Checks for the correct form id first
// then matches the input name for focus.
function loginfocus() {
  if (document.getElementById('loginform')) {
    document.getElementById('loginform').loginID.focus();
  } 
  else if (document.getElementById('certloginform')) {
   document.getElementById('certloginform').password.focus();
  } 
  else if (document.getElementById('passwordeditform')) {
    document.getElementById('passwordeditform').passwd.focus();
  }
  else if (document.getElementById('passwordform')) {
    document.getElementById('passwordform').loginID.focus();
 }
}

// Hash to associate a child window with the element "interested"
// in it.  Used to allow popup windows to communicate a value back
// to a specific form element (Note that since js has no globals, 
// this hash belongs to the window opener, and can only be accessed
// by the child via the 'opener' property):

var windowAssociatedWithElement = new Object;

// Set the value of the element that opened this window, and close
// this window:

function setOpenerValue(newVal) {
  var retValue = true;
  if ( self.opener && !self.opener.closed ){
    opener.windowAssociatedWithElement[self].value = newVal;
    // return the focus to the parent window, and the element
    // which called it: 
    opener.focus();
    opener.windowAssociatedWithElement[self].focus();
    retValue = false;
  }
  window.close();
  return retValue;
}

// Check if a form field has changed from its initial value:
function fieldChanged(formField) {
    if( formField.defaultValue != formField.value ){
        return true;
    }
    else {
        return false;
    }
}

/* Open popup widows of (mostly) predetermined types.

   windowURL -- The URL to load in the new browser window.
   type -- The (predetermined) type of window to launch.
           acceptable values for type:
           1: a help window
           2: a 400x400 window
           3: Issuezilla assignable users popup window
           4: ViewCVS file contents display popup window
           ... and you can hard code others yourself inside the function.
   atts -- (optional) If the window you wish to create is unique and you do
           not want to set up a "type" for it, or if you want to pass
           additional attributes for a certain "type", you can pass its
           attributes directly to the function via this parameter.
   formElementRef -- (optional) reference to a form element which was
           responsible for opening this window, and interested in in its
           choices.
*/

var tigrisPopupCounter = 0;

function launch(windowURL, type, atts, formElementRef) {
  tigrisPopupCounter += 1;

  var windowName = 'CollabNet' + type;
  if (atts) {
    windowName += tigrisPopupCounter;
  }

  var windowAttributes;
  if (type == 1) {
    windowAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,' +
                       'height=485,width=724,status=yes,scrollbars=yes,' +
                       'toolbar=yes,menubar=yes,location=yes'
  }
  else if (type == 2) {
    windowAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,' +
                       'height=400,width=400';
  }
  else if (type == 3) {
   windowAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,' + 
                      'height=440,width=600,scrollbars=yes'; 
  }
  else if (type == 4) {
    windowAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,' +
                       'height=485,width=724,scrollbars=yes';
  }
  else if (type == 5) {
    windowAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,' +
                       'height=600,width=800,status=yes,scrollbars=yes,' +
                       'toolbar=yes,menubar=yes,location=yes'
  }
  
  if (atts) {
    windowAttributes += ',' + atts;
  }

  var windowObj = window.open(windowURL, windowName, windowAttributes);

  if (windowObj) {
    if (formElementRef) {
      // Take note of the element that wanted this window opened:
      windowAssociatedWithElement[windowObj] = formElementRef; 
    }
    return false;
  }
  else {
    return true;
  }
}

//This function is used to set a  input checkbox element in 
//checked/unchecked state
function setSelected(formName, inputName, val)
{
    dml = document.forms[formName];
    len = dml.elements.length;
    var i = 0;
    for (i = 0; i < len; i++)
    {
        if (dml.elements[i].name == inputName)
        {
            dml.elements[i].checked = val;
        }
    }
}

//This function is part of multiselect checkbox implementation
function setTitleValue(formName, inputName, val)
{
    dml = document.forms[formName];
    len = dml.elements.length;
    var i = 0;
    for (i = 0; i < len; i++)
    {
        if (dml.elements[i].name == inputName)
        {
            dml.elements[i].title = val;
        }
    }
}

//This function is used in case of multiselect checkboxes
//This function can be called on "onclick" event of the 
//(select all) check box in order to select or deselect
//all the check boxs under a group
function selectAllCheckBoxes(formName, thisInput, inputToSet)
{
    dml = document.forms[formName];
    len = dml.elements.length;
    var i = 0;
    for (i = 0; i < len; i++)
    {
        if (dml.elements[i].name == thisInput)
        {
            if (dml.elements[i].checked)
            {
                setSelected(formName, inputToSet, 1);
                setTitleValue(formName, thisInput, 'Deselect all');
            }
            else
            {
                setSelected(formName, inputToSet, 0);
                setTitleValue(formName, thisInput, 'Select all');
            }
        }
    }
}

//This function is used in case of multiselect checkboxes
//This function can be called on (onclick) event of the 
//individual check boxes in a group in order to select or deselect
//its state irrespective of other checkboxes state.
function checkSelectAll(formName, thisInput, inputToSet)
{
    dml = document.forms[formName];
    len = dml.elements.length;
    var trueCount = 0;
    var inputCount = 0;
    var i = 0;
    for (i = 0; i < len; i++)
    {
        if ((dml.elements[i].name == thisInput) && (dml.elements[i].checked == false))
        {
            setSelected(formName, inputToSet, 0);
            setTitleValue(formName, inputToSet, 'Select all');
        }
        else
        {
            trueCount++;
        }
        inputCount++;
    }
    if (trueCount == inputCount)
    {
            setSelected(formName, inputToSet,1);
            setTitleValue(formName, inputToSet, 'Deselect all');
    }
}


/* BEGIN JavaScript for Add additional servers */
var DHTML = (document.getElementById || document.all || document.layers);

function getObj(name) {
    if (document.getElementById) {
        this.obj = document.getElementById(name);
        this.style = document.getElementById(name).style;
    } else if (document.all) {
        this.obj = document.all[name];
        this.style = document.all[name].style;
    } else if (document.layers) {
        this.obj = document.layers[name];
        this.style = document.layers[name];
    }
}

function invi(id, flag) {
    if (!DHTML) return;
    var x = new getObj(id);
    x.style.display = (flag) ? 'block' : 'none'
}

function addAdditionalServerTextBoxes(prefix, documentType, showUpload) {
     if (prefix == null) {
        prefix = '';
    }

    if (prefix != '') {
        prefix = prefix + '_';
    }

    document.writeln('<div id="' + prefix + 'doctable_footer_compact" class="doctable_footer">');
    document.writeln('<div class="doctable_links">');
    document.writeln('<div class="open_button" title="' + showUpload + '" onclick="invi(\'' + prefix + 'doctable_footer_expanded\',1);invi(\'' + prefix + 'doctable_footer_compact\',0);">');
    document.writeln('<a href="#"><span class="alt">+<\/span><\/a>');
    document.writeln('<\/div>');
    document.writeln('<a href="javascript:invi(\'' + prefix + 'doctable_footer_expanded\',1);invi(\'' + prefix + 'doctable_footer_compact\',0);" title="' + showUpload + '">' + documentType + '<\/a>');
    document.writeln('<\/div>');
    document.writeln('<\/div>');
    document.writeln('<div id="' + prefix + 'doctable_footer_expanded" class="hide">');
}

function hideAddAdditionalServerTextBoxes(prefix, documentType, hideUpload) {
     if (prefix == null) {
        prefix = '';
    }

    if (prefix != '') {
        prefix = prefix + '_';
    }

    document.writeln('<div class="close_button" title="' + hideUpload + '" onclick="invi(\'' + prefix + 'doctable_footer_expanded\',0);invi(\'' + prefix + 'doctable_footer_compact\',1);">');
    document.writeln('<a href="#"><span class="alt">-<\/span><\/a>');
    document.writeln('<\/div>');
    document.writeln('<a href="javascript:invi(\'' + prefix + 'doctable_footer_expanded\',0);invi(\'' + prefix + 'doctable_footer_compact\',1);" class="selfref">' + documentType + '<\/a>');
}

function uploadTextBoxBottom() {
    document.writeln('<\/div>');
}

function hidediv(id) {
        //safe function to hide an element with a specified id
        if (document.getElementById) { // DOM3 = IE5, NS6
                document.getElementById(id).style.display = 'none';
        }
        else {
                if (document.layers) { // Netscape 4
                        document.id.display = 'none';
                }
                else { // IE 4
                        document.all.id.style.display = 'none';
                }
        }
}

function showdiv(id) {
        //safe function to show an element with a specified id
                  
        if (document.getElementById) { // DOM3 = IE5, NS6
                document.getElementById(id).style.display = 'block';
        }
        else {
                if (document.layers) { // Netscape 4
                        document.id.display = 'block';
                }
                else { // IE 4
                        document.all.id.style.display = 'block';
                }
        }
}

function simpleVisibility(id, id2) 
{
	obj = document.getElementById(id);
	obj2 = document.getElementById(id2);
	
	if (obj.style.display == 'none')
	{
    showdiv(id); 
    obj2.className = 'collapsewidget';  
  }
  else 
  {
    hidediv(id);
   obj2.className = 'expandwidget';  

 	}
 }
/* END JavaScript for Add additional servers */

/* Script to control the page reload in UserAdd page on change of 
	Authentication realm */
	
function pageReloadOnCondition(formObj)
{
    var ceeRealmId = formObj.ceeRealmId.value;
    var realmId = formObj.authRealmId[formObj.authRealmId.selectedIndex].value;
    var prevSelectedRealmId = formObj.prevSelectedRealmId.value;

    if((prevSelectedRealmId=="" || prevSelectedRealmId==ceeRealmId) && realmId!= ceeRealmId)
    {
        formObj.prevSelectedRealmId.value = realmId;
        formObj.submit();
    }
    else if(prevSelectedRealmId!=ceeRealmId && realmId == ceeRealmId)
    {
        formObj.prevSelectedRealmId.value = realmId;
        formObj.submit();
    }
    formObj.prevSelectedRealmId.value = realmId;
}

/* END of page reload on condition script */

/* Script to control the page reload in LoginSetup page on change of 
	Authentication realm */
function loginSetupPageReloadOnCondition(formObj)
{
    var ceeRealmId = formObj.ceeRealmId.value;
    var realmId = formObj.authRealmId[formObj.authRealmId.selectedIndex].value;
    var prevSelectedRealmId = formObj.prevSelectedRealmId.value;

    if(prevSelectedRealmId=="" && realmId==ceeRealmId)
    {
        formObj.prevSelectedRealmId.value = realmId;
        formObj.submit();
    }
    else if(prevSelectedRealmId!=ceeRealmId && realmId == ceeRealmId)
    {
        formObj.prevSelectedRealmId.value = realmId;
        formObj.submit();
    }
    else if(prevSelectedRealmId==ceeRealmId && realmId != ceeRealmId)
    {
        formObj.prevSelectedRealmId.value = realmId;
        formObj.submit();
    }
    formObj.prevSelectedRealmId.value = realmId;
}
/* END of LoginSetup page reload on condition script */