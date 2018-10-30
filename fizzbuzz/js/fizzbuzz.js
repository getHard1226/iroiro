var count = 0;
var count1 = 0;
var FIZZ = 'Fizz!';
var BUZZ = 'Buzz!';
var FIZZ_BUZZ = 'Fizz Buzz!';
var fizzFlg = false;
var buzzFlg = false;

window.addEventListener('load', function() {
	init();
});

function init() {
	count = 0;
	count1 = 0;
	fizzFlg = false;
	buzzFlg = false;
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

function nextClick2() {
	++count1;
	fizzJudge();
	buzzJudge();
	show();
}

function fizzJudge() {
	var t = count1/3;
	if ((t-Math.floor(t)) == 0) {
		fizzFlg = true;
	} else {
		fizzFlg = false;
	}
}

function buzzJudge() {
	var t = count1/5;
	if ((t-Math.floor(t)) == 0) {
		buzzFlg = true;
	} else {
		buzzFlg = false;
	}
}

function show() {
	if (fizzFlg && buzzFlg) {
		document.getElementById('fizzbuzz2').innerHTML
			= count1 + ' ' + FIZZ_BUZZ;
	} else if (fizzFlg) {
		document.getElementById('fizzbuzz2').innerHTML
			= count1 + ' ' + FIZZ;
	} else if (buzzFlg) {
		document.getElementById('fizzbuzz2').innerHTML
			= count1 + ' ' + BUZZ;
	} else {
		document.getElementById('fizzbuzz2').innerHTML
			= count1;
	}
}
