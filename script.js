var title = "Code4BelTib";
$(document).ready(function() {
	$(".title").append(title);
	console.log("Hello, world!")
	if (screen.width >= 1500) {
		console.log("gt 1500: "+screen.width);
		$(".navbar").addClass("fixed-top");
	} else {
		console.log("lt 480: "+screen.width);
	}
});
