// ---------- Set the reading time duration ----------
let readTime = document.getElementById("article-content").innerHTML.trim().split(" ").length / 225; //the actual reading average is closer to 250 according to google, but we want to give an underestimate
let articleContents = document.getElementById("read-time");

articleContents.textContent = (Math.max(1, Math.round(readTime)) + "min Read Time");

// ---------- Add "back to top" button ----------
article = document.getElementsByTagName("article")[0];
if (article.offsetHeight > window.innerHeight) {
	var backToTopButton = document.createElement("button");
	backToTopButton.classList.add("link");
	backToTopButton.textContent = "back to top";

	var backToTopElement = document.createElement("a");
	backToTopElement.appendChild(backToTopButton);
	backToTopElement.setAttribute('href', "#header-padding");

	article.appendChild(backToTopElement);
}