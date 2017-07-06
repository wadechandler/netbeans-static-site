function popup(text,w,h) {
  // newWindow = window.open('','newWin','');
  // newWindow.close();
  newWindow = window.open('','newWin','scrollbars=yes,resizable=yes,width=' + w + ',height=' + h);
  newWindow.document.write('<HTML><HEAD>');
  newWindow.document.write('<TITLE>popup</TITLE>');
  newWindow.document.write('</HEAD><BODY>');
  newWindow.document.write('<FONT FACE=\"Verdana, sans-serif, helvetica, arial\" SIZE=\"-1\">');
  newWindow.document.write(text);
  newWindow.document.write('</BODY></HTML>');
  newWindow.document.close();
  if (window.focus) {newWindow.focus()}
}
