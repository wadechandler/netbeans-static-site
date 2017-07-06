function MSiteSwitchModule() {
  var page = window.document.forms['modulemenu'].elements['listmodule'].options[window.document.forms['modulemenu'].elements['listmodule'].selectedIndex].value;
  if (page > "")
    top.document.location.replace(page);
  return false;
}

