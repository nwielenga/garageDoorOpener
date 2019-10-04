$(document).ready(function() {
	$("#doorone").click(function(e) {
		e.preventDefault();
		$.get("/?trigger=1");
	});
	$("#doortwo").click(function(e) {
		e.preventDefault();
		$.get("/?trigger=2");
	});
	$("#doorthree").click(function(e) {
		e.preventDefault();
		$.get("/?trigger=3");
	});
});