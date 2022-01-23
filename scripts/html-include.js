$(function () {
	const includes = $("[data-include]");
	$.each(includes, function () {
		const file = "../views/" + $(this).data("include") + ".html";
		$(this).load(file);
	});
});
