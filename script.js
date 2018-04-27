var title = "Tiburon Scratch Day";
$(document).ready(function() {
	$(".title").text(title);
	if (window.innerWidth >= 580) {
		$(".navbar").addClass("fixed-top");
	}
});
