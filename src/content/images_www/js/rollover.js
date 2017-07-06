//************************************************************//
//rollover efekt na preklapeni tlacitek
//pouziti: veskera menu tlacitkova s efektem preklopeni po najeti mysi
var module_over_picture = true;

var op_temp_variable = null;
var op_capability = false;
var op_after_init = false;

function op_init()
{
  var browser_name = navigator.appName;
  var browser_version = parseInt(navigator.appVersion);

  op_capability = 
    (browser_name.indexOf("Netscape")>=0 && browser_version>=3) ||
    (browser_name.indexOf("Internet Explorer")>=0 && browser_version>=4);
    op_after_init = true;
}

function op_is_capability()
{
  if (!op_after_init)
    op_init();
  return op_capability;  
}

function op_register (id_name, normal_src, over_src, down_src)
{
  if (!op_after_init)
    op_init();

  if (op_capability)
  {
    if (over_src == null)   over_src = normal_src;
    if (down_src == null)   down_src = over_src;

    op_temp_variable = new Array
      (id_name, true, new Image(), new Image(), new Image());
    op_temp_variable[2].src = normal_src;
    op_temp_variable[3].src = over_src;
    op_temp_variable[4].src = down_src;
    eval ("op_item_" + id_name + " = op_temp_variable");
  }
}

function op_set_normal (id_name)
{
  if (op_capability)
  {
    var reg_item = eval ("op_item_" + id_name);
    if (reg_item[1]){
      var el = document.getElementById(id_name);
    el.src = reg_item[2].src;}
  }
}
    
function op_set_over (id_name)
{
  if (op_capability)
  {
    var reg_item = eval ("op_item_"+id_name);
    if (reg_item[1])
    	{
        var el = document.getElementById(id_name);
	el.src = reg_item[3].src;
	}
  }
}

function op_set_down (id_name)
{
  if (op_capability)
  {
    var reg_item = eval ("op_item_" + id_name);
    if (reg_item[1])
      {
      var el = document.getElementById(id_name);       
      el.src = reg_item[4].src;      
      }
  }
}

function op_lock (id_name)
{
  if (op_capability)
    eval("op_item_"+id_name)[1] = false;
}

function op_unlock (id_name)
{
  if (op_capability)
    eval("op_item_"+id_name)[1] = true;
}


/* functin for hiding/showing element using style.display=none/block */
function switch_element(id)
{
        var kat_layer=document.getElementById(id);
        if(kat_layer.style.display=="block")
        {
                kat_layer.style.display="none";
        }
        else
        {
                kat_layer.style.display="block";
        }
        return false;
}


