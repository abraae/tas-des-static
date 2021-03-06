// borrows from http://stackoverflow.com/a/187946/2480751

function renderTOC() {

	var tocId = 'toc';
	var toc = "";
	var level = 0;

	document.body.innerHTML = document.body.innerHTML.replace(
			/<h([\d])>([^<]+)<\/h([\d])>/gi, function(str, openLevel,
					titleText, closeLevel) {

				if (openLevel != closeLevel) {
					return str;
				}

				if (openLevel > level) {
					toc += (new Array(openLevel - level + 1)).join("<ul>");
				} else if (openLevel < level) {
					toc += (new Array(level - openLevel + 1)).join("</ul>");
				}

				level = parseInt(openLevel);

				var anchor = titleText.replace(/ /g, "_");
				toc += "<li><a href=\"#" + anchor + "\">" + titleText
						+ "</a></li>";

//				return "<h" + openLevel + "><a name=\"" + anchor + "\">"
//						+ titleText + "</a></h" + closeLevel + ">";
				return "<h" + openLevel + "><a name=\"" + anchor + "\">"
						+ titleText + "</a>&nbsp;&nbsp;<small><small><a href=\"#top\">top</a></small></small></h" + closeLevel + ">";
			});
	
	if (level) {
		toc += (new Array(level + 1)).join("</ul>");
	}
	
	document.getElementById(tocId).innerHTML += toc;
}
