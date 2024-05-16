/*

This file relies on the buttonBuilder script to create buttons and add elements to the dropdown.
Therefore, this script should always be run before the buttonBuilder.

*/

// ---------- Set the reading time duration ----------
let readTime = document.getElementById("article-content").innerHTML.trim().split(" ").length / 225; //the actual reading average is closer to 250 according to google, but we want to give an underestimate
document.getElementById("read-time").textContent = (Math.max(1, Math.round(readTime)) + "min read time");

// ---------- Add "back to top" button ----------
article = document.getElementsByTagName("article")[0];
if (article.offsetHeight > 2 * window.innerHeight) {
	var backToTopButton = document.createElement("button");
	backToTopButton.classList.add("link");
	backToTopButton.textContent = "back to top";

	var backToTopElement = document.createElement("a");
	backToTopElement.appendChild(backToTopButton);
	backToTopElement.setAttribute("href", "#top");

	article.appendChild(backToTopElement);
}

// ---------- Add dropdown link to each header ----------
headers = document.getElementsByTagName("h2");
headerList = document.getElementsByClassName("header-list");

for (var j = 0; j < headerList.length; j++) {
	for (let i = 0; i < Math.min(headers.length, 10 /* dropdowns only support up to 10 items, so we have a hard limit in case we ever reach >10 headers (should never happen in reality) */); i++) {
		var headerId = headers[i].textContent.replaceAll(" ", "-").toLowerCase();
		headers[i].setAttribute("id", headerId);
		
		var li = document.createElement("li");
		li.appendChild(document.createElement("a"));
		li.firstChild.setAttribute("href", "#" + headerId);
		li.firstChild.textContent = headers[i].textContent;
		headerList[j].appendChild(li);
	}
}