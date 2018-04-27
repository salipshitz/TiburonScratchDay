var title = "Tiburon Scratch Day";
$(document).ready(function() {
	$(".title").text(title);
	while (true) {
		if (window.innerWidth < 580) {
			$(".navbar").css("display", "none");
		} else {
			$(".navbar").css("display", "block");
		}
	}
});
