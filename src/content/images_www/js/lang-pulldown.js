// JavaScript Document

function startList() {
if (document.all&&document.getElementById) {
	navRoot = document.getElementById("nav");
	if (navRoot!=null) { //if the language panel is active
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}	
		}
	}
}
}
window.onload=startList;


