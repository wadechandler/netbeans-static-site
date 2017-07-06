function show_login_form(username,logintext,logouttext,where) {

   var d = new Date()
   var t = d.getTime()
   var detour = location.href;
   // Hack for issue #84866 : by appending some unique string to the destination URL,
   // we make sure it is loaded fresh by the caches, and the login form is really updated.
   // This is not very unique, eg it could be combined with username to make it better,
   // but this is a short term hack, I hope.  Remove this once the issue is better
   // addressed.
   if ((detour.indexOf("/issues/") == -1) && (detour.indexOf("/servlets/") == -1)) {
     var detour = detour + '?' + t;
   }

   if (detour.indexOf("/servlets/Login") != -1) {
      detour = null;
   }
   if (where == "top") {
      if(username!="guest") {
         document.write("<center><table><tr><td>Logged in as <a style=\"color: black;\" href=\"/servlets/StartPage\"><b>"+username+"</b></a><br><a href=\"https://netbeans.org/issues/buglist.cgi?cmdtype=runuserdefault\">Check my issues</a></td><td>&nbsp;<a href=\"/servlets/TLogout\"><img width=\"46\" height=\"15\" style=\"margin-top: 2px;\" src=\"https://netbeans.org/images_www/v4/btn_logout2.gif\"/></a></td></tr></table></center>");
      } else {
         document.write("Not logged in. <a href=\"\" onclick=\"return switch_element('comm_loginbox')\"><b>Log In</b></a>, <a href=\"https://netbeans.org/servlets/Join\">Register</a>");
         document.write('<div id="comm_loginbox" class="hidden">');
         document.write('<form action="/servlets/TLogin" method="post" style="display:inline"><br><table border="0" cellspacing="0" cellpadding="0">');
         document.write('<tr><td>username: </td><td rowspan="4" style="vertical-align:bottom">&nbsp;<input type="submit" name="Button" value="'+logintext+'" class="button"></td></tr>');
         if (detour) {
            document.write('<input type="hidden" name="detour"  value="' + detour + '">');
         }
         document.write('<tr><td>');      
         document.write('<input type="text" name="loginID" id="loginID" maxlength="52" class="toplogininp field" ></td></tr>');
         document.write('<tr><td>password: </td></tr>');
         document.write('<tr><td><input type="password" name="password" id="password" maxlength="15" class="toplogininp field" style="margin-bottom:2px;"></td></tr>');
         document.write('<tr><td colspan="2" class="align-left"><span class="font-11"><a href="https://netbeans.org/servlets/PasswordRequest">Forgot your password?</a></span></td></tr></table><br></form>');
         document.write("</div>");
      }

   } else if (where == "issuezilla") {
      if (username!='guest') {
         document.write('<div class="bg-bege b-left b-right b-top b-bottom" style="padding:5px;"><table><tr><td class="valign-center" style="padding-top:4px;">Logged in as <a href="/servlets/StartPage" style="color:black;"><b>' + username + '</b></a> </td><td>');
         document.write('<a href="/servlets/TLogout"><img src="https://netbeans.org/images_www/v4/btn_logout2.gif" alt="" width="46" height="15" border="0" style="margin-top:5px;"></a></td></tr></table></div><br/>');
      } else {
         document.write('<form action="/servlets/TLogin" method="post" style="display:inline"><div style="padding:5px;" class="bg-bege b-left b-right b-top b-bottom"><table border="0" cellspacing="0" cellpadding="0">');
         document.write('<tr><td>username: </td>');
         document.write('<td>');
         if (detour) {
            document.write('<input type="hidden" name="detour"  value="' + detour + '">');
         }
         document.write('<input type="text" name="loginID" id="loginID" maxlength="52" class="toplogininp field" ></td>');
         document.write('<td>password: </td>');
         document.write('<td><input type="password" name="password" id="password" maxlength="15" class="toplogininp field" style="margin-bottom:2px;"></td><td style="vertical-align:bottom">&nbsp;<input type="submit" name="Button" value="' + logintext + '" class="button"></td>');
         document.write('<td>&nbsp; <span class="font-11"><a href="https://netbeans.org/servlets/PasswordRequest">Forgot your password?</a></span></td></tr></table></div></form><br/>');
      }

   } else {
      if (username!='guest') {
         document.write('<center><table><tr><td class="valign-center" style="padding-top:4px;">Logged in as <a href="/servlets/StartPage" style="color:black;"><b>' + username + '</b></a> </td><td>');
         document.write('<a href="/servlets/TLogout"><img src="https://netbeans.org/images_www/v4/btn_logout2.gif" alt="" width="46" height="15" border="0" style="margin-top:5px;"></a></td></tr></table></center>');
      } else {
         document.write('<form action="/servlets/TLogin" method="post" style="display:inline"><table border="0" cellspacing="0" cellpadding="0">');
         document.write('<tr><td>username: </td><td rowspan="4" style="vertical-align:bottom">&nbsp;<input type="submit" name="Button" value="' + logintext + '" class="button"></td></tr>');
         document.write('<tr><td>');
         if (detour) {
            document.write('<input type="hidden" name="detour"  value="' + detour + '">');
         }
         document.write('<input type="text" name="loginID" id="loginID" maxlength="52" class="toplogininp field" ></td></tr>');
         document.write('<tr><td>password: </td></tr>');
         document.write('<tr><td><input type="password" name="password" id="password" maxlength="15" class="toplogininp field" style="margin-bottom:2px;"></td></tr></table>');
         document.write('&nbsp; <span class="font-11"><a href="https://netbeans.org/servlets/PasswordRequest">Forgot your password?</a></span></form>');
      }

   }
}

