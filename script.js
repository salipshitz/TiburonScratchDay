var title = "Tiburon Scratch Day";
$(document).ready(function() {
	$(".title").append(title);
	console.log("Hello, world!")
	while (true) {
		if (window.innerWidth >= 580) {
			$(".navbar").addClass("fixed-top");
		}
	}
});
