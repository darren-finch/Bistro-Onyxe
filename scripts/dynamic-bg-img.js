$(function () {
	const elements = $("[data-bg-img]");
	$.each(elements, function () {
		const file = "../assets/" + $(this).data("bg-img");
		$(this).css("background-image", 'url("' + file + '")');
	});
});
