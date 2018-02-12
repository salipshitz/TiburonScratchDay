var title = "Code4BelTib";
$(document).ready(function() {
	$(".title").append(title);
	console.log("Hello, world!")
	if (window.innerWidth >= 580) {
		console.log("gt 580: "+window.innerWidth);
		$(".navbar").addClass("fixed-top");
	} else {
		console.log("lt 580: "+window.innerWidth);
	}
});
