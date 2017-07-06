/**
 * jMaki Revolver
 * 
 * version .9.2
 *
 * Author : Greg Murray
 * gmurray71 (a) dev.java.com
 * 
 * 
 */
 
 // define the namespaces
if (typeof jmaki == 'undefined') jmaki = {};
if (!jmaki.widgets) jmaki.widgets = {};
if (!jmaki.widgets.jmaki) jmaki.widgets.jmaki = {};
if (!jmaki.widgets.jmaki.revolver) jmaki.widgets.jmaki.revolver = {};
      
jmaki.widgets.jmaki.revolver.Widget = function(wargs) {

  var self = this;
  var container = document.getElementById(wargs.uuid);
  var offset;
  var arrowRight;
  var arrowLeft;
  var status;
    
  var contentPane = document.getElementById(wargs.uuid + "-content-pane");
  var items;
  var index = 0;
  var opacitysetting = 0.1;
  var fadetimer1;
    
  var titleDiv = document.getElementById(wargs.uuid + "-title-pane");
    
  var degree = 0;
    
  // this should also account for the image widths
  var padding = 90;

  var yRadius = 10;
  
  var xRadius = (container.clientWidth / 2) - padding;  
  var centerX = (container.clientWidth / 2);

  var centerY = 35;

  var iWidth = 150;
  var iHeight = 150;

  var gap = 0;
  var speed = 'auto';
  var delay = 25;
  var increment = 3;
  var selected = -1;
  var animate = true;
  var processing = false;
  
  if (wargs.args) {

      if (wargs.args.padding) {
          padding = wargs.args.padding;
          if (!wargs.args.xRadius) xRadius = (container.clientWidth / 2) - padding;
      }
      if (wargs.args.centerX) {
          centerX = wargs.args.centerX;
      }
      if (wargs.args.centerY) {
          centerY = wargs.args.centerY;
      }
      if (wargs.args.xRadius) {
          xRadius = wargs.args.xRadius;
      }     
      if (wargs.args.yRadius) {
          yRadius = wargs.args.yRadius;
      }
      if (wargs.args.xRadius) {
          xRadius = wargs.args.xRadius;
      }
      if (wargs.args.speed) {
          speed = wargs.args.speed;
      }      
      if (wargs.args.iHeight) {
          iHeight = wargs.args.iHeight;
      }  
      if (wargs.args.iWidth) {
          iWidth = wargs.args.iWidth;
      }     
  }
  
  var range = Math.round(increment / 2) + 1;  
  // default is auto which will do a speed test
  if (speed == 'auto') {
      var rate = testAnimation();
      if (rate > 75) {
        increment = 15;
        delay = 5;
      }
  } else if (speed == 'slow') {
      delay = 35;
      increment = 1;
  } else if (speed == 'medium') {
      delay = 25;
      increment = 3;
  } else if (speed == 'fast') {
      increment = 4;
      delay = 5;    
  }

  if (typeof wargs.value != 'undefined') {
      items = wargs.value;
      loadImages();
  }
    
  if (wargs.service) {
      getRevolverItems(getXHR());
  }
  
  function preload() {

      var div = document.createElement("div");
      div.style.left = '-100px';
      div.className = "arrowRightHover";
      var div2 = document.createElement("div");
      div2.style.left = '-100px';
      div2.className = "arrowLeftHover";
      container.appendChild(div);
      container.appendChild(div2);
  }  
    
  function getXHR() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
  }
    

  function getRevolverItems(ajax){
      var load = function() {
        if (ajax.readyState == 4){ 
            if (ajax.responseText) {
              var obj = eval("(" + ajax.responseText + ")");
              items = obj;    
            }

            if (items != null && items.length == 0) { 
                return;
            }
            loadImages();
            setTimeout(function(){doAnimation(true)}, 0);
          }
      }    	
      ajax.onreadystatechange = function(){load()};
      ajax.open('http://ajax.dev.java.net/samples/GET', wargs.service, true);
      ajax.send(null);
  }
    
  function setOpacity(opacity, id) {
      var target = document.getElementById(id);
      if (typeof target.style.filter != 'undefined') {
          target.style.filter = "alpha(opacity:" + (opacity*100) + ")";
      } else {
          target.style.opacity = opacity;
      }
  }
    
  function loadLink(_l) {
      if (selected != _l) {
        var _degree = 0;
        if (degree + items[_l].degree > 360) _degree = (360 - (degree + items[_l].degree)) * -1;
        else _degree =  degree + items[_l].degree;          
        if (_degree > 0 && _degree < 180) {
              getPrevious();
   	} else {
              getNext();
      	}
      }
  }
  
  function getPosition(_e) {
      var pX = 0;        
      var pY = 0;
      if (_e.offsetParent) {
          pX = _e.offsetLeft;        
          pY = _e.offsetTop;
      }
      while (_e.offsetParent) {
          _e = _e.offsetParent;
          pX += _e.offsetLeft;          
          pY += _e.offsetTop;
          
      }  
      return {x: pX, y: pY};
  } 

  
  function findPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	return { x: curleft, y: curtop };
}
  

  function resize() {
      xRadius = (container.clientWidth / 2) - padding;  
      centerX = (container.clientWidth / 2);     
      offset = getPosition(container);      
      arrowRight.style.top = (container.clientHeight + offset.y -  45) + "px";
      arrowRight.style.left = (container.clientWidth + offset.x - 45) + "px";
      arrowLeft.style.top = (container.clientHeight + offset.y - 45) + "px";
      var l = offset.x;
      arrowLeft.style.left = (l + 5) + "px";
      reposition();
 }
 
 // attatch the resize listener
 if (window.addEventListener) {
     window.addEventListener('resize', resize, true);
       // add key navigation listener
       document.addEventListener("keydown", function(e) {
         switch (e.keyCode) {	
           case 37: getPrevious();
           break;
           case 39: getNext(); 
           break;
       }    		
    }, true);
 } else if (window.attachEvent) {
     window.attachEvent('onresize', resize);
     // add key navigation listener
     document.attachEvent("onkeydown", function() {
          switch (window.event.keyCode) {			
            case 37: getPrevious();
	         break;
            case 39: getNext(); 
                 break;
          }    
      });     
 }  

 function loadImages(){
      // preload the styles
      preload();  

      arrowRight = document.createElement("div");
      arrowRight.className = "arrowRight";
      arrowRight.title = "Next";
      arrowRight.onclick = function() {
          getNext(); 
      }

      container.appendChild(arrowRight);
  	
      arrowLeft = document.createElement("div");
      arrowLeft.className = "arrowLeft";
      arrowLeft.title = "Previous";
      arrowLeft.onclick = function() {
          getPrevious();
      }
      container.appendChild(arrowLeft);

      for (var _l=0; _l < items.length; _l++) {
          items[_l].link = document.createElement('a');
          items[_l].image = document.createElement("img");
          items[_l].image.style.visibility = 'hidden';
          items[_l].image.style.position = "absolute";
          items[_l].image.src = items[_l].imgSrc;
          items[_l].originalWidth = items[_l].image.width;
          items[_l].originalHeight = items[_l].image.height;
          items[_l].image.style.height = iWidth + 'px';
          items[_l].image.style.width = iHeight + 'px';
          items[_l].image.border = '0px';          
          items[_l].image.style.zIndex =  _l;
          items[_l].image.id = _l;
          items[_l].image.style.cursor = "pointer";
          items[_l].image.onclick = function(e) {
              if (!e) _t = window.event.srcElement;
              else _t = e.target;
              if (!_t.selected){
                  loadLink(Number(_t.id));
              }
          }
          // calculate initial radius for each item based on # of images
         items[_l].degree = _l * (360 / items.length);
         items[_l].link.appendChild(items[_l].image);
         contentPane.appendChild(items[_l].link);
      }
      gap = (360 / items.length);
      resize();
      for (var _l=0; _l < items.length; _l++) {
          items[_l].image.style.visibility = 'visible'; 
      }
      getNext();
  }
  
  function scaleImage(_i, percentage) {
      items[_i].image.style.width = (iWidth * percentage) + "px";
      items[_i].image.style.height = (iHeight * percentage) + "px";
  }
  
  /**
   * Calcuate the size of the image which can also be used to determine z-order.
   * Bigger images mean it should be closer to the top of the stack.
   */
  function processImage(_i, deg) {
      // if between 0 / 180 we should be shrinking
      var size = 1;      
      if (deg >= 0 && deg < 180) {
         size = (180 - deg)/180;

      // if between 180 / 359 we should be growing
      } else if (deg >= 180 && deg <= 360) {
          size = (deg-180)/180;
      }
      scaleImage(_i, size);
      items[_i].image.style.zIndex = Math.round(size * 100);
  }
  
  function getNext() {
      titleDiv.innerHTML = "";
      if (!processing) {
          processing = true;
          doAnimation(true);
      }
  }
  
  function getPrevious() {
      titleDiv.innerHTML = "";
      if (!processing) {
          processing = true;
          doAnimation(false);
      }
  }
  
  function reposition() {
      for (var _l = 0; _l < items.length; _l++) {
        var _degree = 0;
        if (degree + items[_l].degree > 360) _degree = (360 - (degree + items[_l].degree)) * -1;
        else _degree =  degree + items[_l].degree;
        var pt = getElipticalPoint(_degree);     	
        items[_l].image.style.top = pt.y  + offset.y +  "px";
        items[_l].image.style.left = pt.x - (items[_l].image.width / 2) + offset.x + "px";         	
        processImage(_l, _degree);        		
      }
  }
  
  function doAnimation(forward) {

    if (!animate && !processing) return;
    var found = false;
    
    for (var _l = 0; _l < items.length; _l++) {
        var _degree = 0;
        if (degree + items[_l].degree > 360) _degree = (360 - (degree + items[_l].degree)) * -1;
        else _degree =  degree + items[_l].degree;
        if (forward && degree >= 360) {
            degree = 0;
      	} else if (!forward &&  degree < 0) {
            degree = 360;
      	}
  
        if (_degree > 360 - range ||
            _degree < range) {
            items[_l].selected = true;
            if (selected != _l){
                selected = _l;
                found = true;
                processing = false;
      	        break;
      	    }
        }
        var pt = getElipticalPoint(_degree);     	
        items[_l].image.style.top = pt.y  + offset.y +  "px";
 
        items[_l].image.style.left = pt.x - (items[_l].image.width / 2) + offset.x + "px";         	
        processImage(_l, _degree);
        items[_l].link.href = '#';
        items[_l].link.target = "_self";
             		
      }
      if (found == true) {
          reposition();

          // center the selected div
         items[selected].image.style.left = (container.clientWidth / 2) - (items[selected].image.width / 2) + offset.x + "px"; 


          items[selected].image.style.zIndex = 400;
          var target = "";
          if (items[selected].target) target = " target='" + items[selected].target + "'";
    	  titleDiv.innerHTML = "<a href='" + items[selected].href + "' class='revolverTitleLink jmakiFont'" + target + ">"+ items[selected].title + "</a>";
          items[selected].link.href = items[selected].href;
          if (items[selected].target)items[selected].link.target = items[selected].target;
          if (items.length == 1) selected = -1;
      } else {
        if (forward) degree = degree + increment;
        else degree = degree - increment;
        if (animate && processing)setTimeout(function(){doAnimation(forward)}, delay);
      }      
   }
   
   function clearSelected() {
       for (var _l = 0; _l < items.length; _l++) {
           items[_l].selected = false;
       } 
   }

  function getElipticalPoint(_d) {
      var rad = _d * (Math.PI / 180);
      var _x = centerX + xRadius * Math.sin(rad);
      var _y = centerY + yRadius * Math.cos(rad);
      return {x : _x, y : _y};
  }

  function fade(type, timerid){
        
      if (type == "reset") {
          opacitysetting=.1;
      }
        
      setOpacity(opacitysetting, wargs.uuid);
        
      if (type == "up") {
          opacitysetting += 0.1;
      }
        
      if (opacitysetting >= 1 ) {
            clearInterval(fadetimer1);
      }
  }
  
  function testAnimation() {
      var ao = document.createElement("div");
      ao.style.position = "absolute";
      document.body.appendChild(ao);

      var start = new Date();
   
      function animate(x) {
          ao.style.left = x + "px";
      }
      
      for (var _i=0; _i < 100; _i++) {
          animate(_i);
      }
      var end = new Date();

      return (end - start);
   } 
}