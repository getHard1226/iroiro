var count = 0;
var FIZZ = 'Fizz!';
var BUZZ = 'Buzz!';
var FIZZ_BUZZ = 'Fizz Buzz!';

window.addEventListener('load', function() {
	init();
});

function init() {
	count = 0;
}

function nextClick() {
	++count;
	if ((count%3) == 0 && (count%5) == 0) {
		document.getElementById('fizzbuzzArea').innerHTML
			= count + ' ' + FIZZ_BUZZ;
	} else {
		if ((count%3) == 0) {
			document.getElementById('fizzbuzzArea').innerHTML
				= count + ' ' + FIZZ;
		} else if ((count%5) == 0) {
			document.getElementById('fizzbuzzArea').innerHTML
				= count + ' ' + BUZZ;
		} else {
			document.getElementById('fizzbuzzArea').innerHTML
				= count;
		}
	}
}
