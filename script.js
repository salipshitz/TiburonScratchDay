var title = "Tiburon Java Day";
$(document).ready(function() {
	$(".title").append(title);
	console.log("Hello, world!")
	while (true) {
		if (window.innerWidth >= 580) {
			$(".navbar").addClass("fixed-top");
		}
	}
});
