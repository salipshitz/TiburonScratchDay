var title = "Code4BelTib";
$(document).ready(function() {
	$(".title").append(title);
	console.log("Hello, world!")
	if (screen.width >= 480) {
		console.log("gt 480: "+screen.width);
		$(".navbar").addClass("fixed-top");
	} else {
		console.log("lt 480: "+screen.width);
	}
});
