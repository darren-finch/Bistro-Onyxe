function rotateLines() {
	const lineWrappers = document.getElementsByClassName("about-us-line-wrapper");
	const lines = document.getElementsByClassName("about-us-line");

	const rootStyle = getComputedStyle(document.body);
	const aboutUsImgMargin = rootStyle.getPropertyValue("--about-us-img-margin");
	const aboutUsImgPadding = rootStyle.getPropertyValue("--about-us-img-padding");
	const aboutUsImgHeight = rootStyle.getPropertyValue("--about-us-img-height");

	console.log(aboutUsImgMargin);
	console.log(aboutUsImgPadding);
	console.log(aboutUsImgHeight);

	const lineWrapperWidth = lineWrappers[0].offsetWidth;
	const lineWrapperHeight = lineWrappers[0].offsetHeight;

	var radianAngle = Math.atan(lineWrapperHeight / lineWrapperWidth);
	if (window.innerWidth < 768) {
		radianAngle = 0;
	}

	for (var line of lines) {
		line.style.transform = "rotate(" + radianAngle + "rad)";
		radianAngle *= -1;
	}
}

var timeOutFunctionId;

window.addEventListener("resize", function () {
	clearTimeout(timeOutFunctionId);

	timeOutFunctionId = setTimeout(rotateLines(), 500);
});

window.addEventListener("DOMContentLoaded", function () {
	rotateLines();
});
