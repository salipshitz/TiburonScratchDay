var title = "Code4BelTib";
$(document).ready(function() {
	$(".title").append(title);
	if (screen.width >= 480) {
		$(".nav").addClass("fixed-top");
	}
});
