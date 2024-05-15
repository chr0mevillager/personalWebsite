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

// ---------- Add links to each header ----------
headers = document.getElementsByTagName("h2");
for (let i = 0; i < headers.length; i++) {
	headers[i].setAttribute("id", (headers[i].textContent.replaceAll(" ", "-")).toLowerCase());
}