// ---------- Setup button links (components being loaded are invisible when created; no visivble change or added loadtime) ----------
var buttonLinks = document.getElementsByClassName("link");
for (var i = 0; i < buttonLinks.length; i++) {

	//Change text child node to p child object
	var buttonChildText = document.createElement("p");
	buttonChildText.textContent = buttonLinks[i].firstChild.textContent;

	buttonLinks[i].removeChild(buttonLinks[i].firstChild);
	buttonLinks[i].appendChild(buttonChildText);

	//Add animation triggers
	buttonLinks[i].addEventListener("mouseover", function () {
		this.classList.add('hovered');
	}, false);
	buttonLinks[i].addEventListener("mouseleave", function () {
		this.classList.remove('hovered');
	}, false);

	//Add wiper element
	var wiper = document.createElement("div");
	wiper.classList.add("wiper");
	buttonLinks[i].prepend(wiper);
}

// ---------- Setup dropdown button links (components being loaded are invisible when created; no visivble change or added loadtime) ----------
var dropdownButtonLinks = document.getElementsByClassName("link-dropdown");
for (var i = 0; i < dropdownButtonLinks.length; i++) {
	//Change text child node to p child object
	var dropdownButtonChildText = document.createElement("p");
	dropdownButtonChildText.textContent = dropdownButtonLinks[i].firstChild.textContent;

	dropdownButtonLinks[i].removeChild(dropdownButtonLinks[i].firstChild);
	dropdownButtonLinks[i].prepend(dropdownButtonChildText);

	//Add animation triggers
	dropdownButtonLinks[i].addEventListener("mouseover", function () {
		this.classList.add('hovered');
	}, false);
	dropdownButtonLinks[i].addEventListener("mouseleave", function () {
		this.classList.remove('hovered');
	}, false);
	// if (dropdownButtonLinks[i].classList.contains("hover")) {
	// 	dropdownButtonLinks[i].addEventListener("mouseover", function() {
	// 		showDropdown(this);
	// 		this.classList.add('hovered');
	// 	}, false);
	// 	dropdownButtonLinks[i].addEventListener("mouseleave", function() {
	// 		this.classList.remove('hovered');
	// 	}, false);
	// } else {
	// 	dropdownButtonLinks[i].addEventListener("mouseover", function() {
	// 		this.classList.add('hovered');
	// 	}, false);
	// 	dropdownButtonLinks[i].addEventListener("mouseleave", function() {
	// 		this.classList.remove('hovered');
	// 	}, false);
	// }

	//Add wiper element
	var wiper = document.createElement("div");
	wiper.classList.add("wiper");
	dropdownButtonLinks[i].prepend(wiper);
}

function showDropdown(el) {
	if (!el.classList.contains("open-link-dropdown")) {
		el.classList.add("open-link-dropdown");
		el.nextElementSibling.classList.remove("hide");
	} else {
		el.classList.remove("open-link-dropdown");
		el.nextElementSibling.classList.add("hide");
	}
}