var color101 = document.getElementById('edit-submitted-color-code-1');
var color102 = document.getElementById('edit-submitted-color-code-2');
var color103 = document.getElementById('edit-submitted-color-code-3');
var color104 = document.getElementById('edit-submitted-color-code-4');
var color105 = document.getElementById('edit-submitted-color-code-5');
var color106 = document.getElementById('edit-submitted-color-code-6');
var color107 = document.getElementById('edit-submitted-color-code-7');
var color108 = document.getElementById('edit-submitted-color-code-8');
var color109 = document.getElementById('edit-submitted-color-code-9');
var color110 = document.getElementById('edit-submitted-color-code-10');
var color111 = document.getElementById('edit-submitted-color-code-11');
var color201 = document.getElementById('edit-submitted-color-code-12');
var color202 = document.getElementById('edit-submitted-color-code-13');
var color203 = document.getElementById('edit-submitted-color-code-14');
var color204 = document.getElementById('edit-submitted-color-code-15');
var color205 = document.getElementById('edit-submitted-color-code-16');
var color206 = document.getElementById('edit-submitted-color-code-17');
var color207 = document.getElementById('edit-submitted-color-code-18');
var color208 = document.getElementById('edit-submitted-color-code-19');
var color209 = document.getElementById('edit-submitted-color-code-20');
var color210 = document.getElementById('edit-submitted-color-code-21');
var color211 = document.getElementById('edit-submitted-color-code-22');
var color301 = document.getElementById('edit-submitted-color-code-23');
var color302 = document.getElementById('edit-submitted-color-code-24');
var color303 = document.getElementById('edit-submitted-color-code-25');
var color304 = document.getElementById('edit-submitted-color-code-26');
var color305 = document.getElementById('edit-submitted-color-code-27');
var color306 = document.getElementById('edit-submitted-color-code-28');
var color307 = document.getElementById('edit-submitted-color-code-29');
var color308 = document.getElementById('edit-submitted-color-code-30');
var color309 = document.getElementById('edit-submitted-color-code-31');
var color310 = document.getElementById('edit-submitted-color-code-32');
var color311 = document.getElementById('edit-submitted-color-code-33');

// var sum301 = document.getElementsByClassName('3-01')[0];
// var sum308 = document.getElementsByClassName('3-08')[0];
// var label301 = color301.nextElementSibling;
// var label308 = color308.nextElementSibling;
// label301.appendChild(sum301);
// label308.appendChild(sum308);
var sum101 = document.getElementsByClassName('1-01')[0];
color101.nextElementSibling.appendChild(sum101);
var sum102 = document.getElementsByClassName('1-02')[0];
color102.nextElementSibling.appendChild(sum102);
var sum103 = document.getElementsByClassName('1-03')[0];
color103.nextElementSibling.appendChild(sum103);
var sum104 = document.getElementsByClassName('1-04')[0];
color104.nextElementSibling.appendChild(sum104);
var sum105 = document.getElementsByClassName('1-05')[0];
color105.nextElementSibling.appendChild(sum105);
var sum106 = document.getElementsByClassName('1-06')[0];
color106.nextElementSibling.appendChild(sum106);
var sum107 = document.getElementsByClassName('1-07')[0];
color107.nextElementSibling.appendChild(sum107);
var sum108 = document.getElementsByClassName('1-08')[0];
color108.nextElementSibling.appendChild(sum108);
var sum109 = document.getElementsByClassName('1-09')[0];
color109.nextElementSibling.appendChild(sum109);
var sum110 = document.getElementsByClassName('1-10')[0];
color110.nextElementSibling.appendChild(sum110);
var sum111 = document.getElementsByClassName('1-11')[0];
color111.nextElementSibling.appendChild(sum111);

var sum201 = document.getElementsByClassName('2-01')[0];
color201.nextElementSibling.appendChild(sum201);
var sum202 = document.getElementsByClassName('2-02')[0];
color202.nextElementSibling.appendChild(sum202);
var sum203 = document.getElementsByClassName('2-03')[0];
color203.nextElementSibling.appendChild(sum203);
var sum204 = document.getElementsByClassName('2-04')[0];
color204.nextElementSibling.appendChild(sum204);
var sum205 = document.getElementsByClassName('2-05')[0];
color205.nextElementSibling.appendChild(sum205);
var sum206 = document.getElementsByClassName('2-06')[0];
color206.nextElementSibling.appendChild(sum206);
var sum207 = document.getElementsByClassName('2-07')[0];
color207.nextElementSibling.appendChild(sum207);
var sum208 = document.getElementsByClassName('2-08')[0];
color208.nextElementSibling.appendChild(sum208);
var sum209 = document.getElementsByClassName('2-09')[0];
color209.nextElementSibling.appendChild(sum209);
var sum210 = document.getElementsByClassName('2-10')[0];
color210.nextElementSibling.appendChild(sum210);
var sum211 = document.getElementsByClassName('2-11')[0];
color211.nextElementSibling.appendChild(sum211);

var sum301 = document.getElementsByClassName('3-01')[0];
color301.nextElementSibling.appendChild(sum301);
var sum302 = document.getElementsByClassName('3-02')[0];
color302.nextElementSibling.appendChild(sum302);
var sum303 = document.getElementsByClassName('3-03')[0];
color303.nextElementSibling.appendChild(sum303);
var sum304 = document.getElementsByClassName('3-04')[0];
color304.nextElementSibling.appendChild(sum304);
var sum305 = document.getElementsByClassName('3-05')[0];
color305.nextElementSibling.appendChild(sum305);
var sum306 = document.getElementsByClassName('3-06')[0];
color306.nextElementSibling.appendChild(sum306);
var sum307 = document.getElementsByClassName('3-07')[0];
color307.nextElementSibling.appendChild(sum307);
var sum308 = document.getElementsByClassName('3-08')[0];
color308.nextElementSibling.appendChild(sum308);
var sum309 = document.getElementsByClassName('3-09')[0];
color309.nextElementSibling.appendChild(sum309);
var sum310 = document.getElementsByClassName('3-10')[0];
color310.nextElementSibling.appendChild(sum310);
var sum311 = document.getElementsByClassName('3-11')[0];
color311.nextElementSibling.appendChild(sum311);

// var totalSum = document.getElementById('total-sum');
// var tabHeader = document.getElementById('ofp-tab-header');
// tabHeader.appendChild(totalSum);

var radiosBox = document.getElementById("edit-submitted-color-code");

radiosBox.onchange = function() {
  if (color101.checked) {
	document.getElementById('edit-submitted-probnyy-24').checked=true;
	document.getElementById('edit-submitted-probnyy-24').click();
  } else if (color102.checked) {
	document.getElementById('edit-submitted-probnyy-25').checked=true;
	document.getElementById('edit-submitted-probnyy-25').click();
  } else if (color103.checked) {
	document.getElementById('edit-submitted-probnyy-26').checked=true;
	document.getElementById('edit-submitted-probnyy-26').click();
  } else if (color104.checked) {
	document.getElementById('edit-submitted-probnyy-28').checked=true;
	document.getElementById('edit-submitted-probnyy-28').click();
  } else if (color105.checked) {
	document.getElementById('edit-submitted-probnyy-27').checked=true;
	document.getElementById('edit-submitted-probnyy-27').click();
  } else if (color106.checked) {
	document.getElementById('edit-submitted-probnyy-2914').checked=true;
	document.getElementById('edit-submitted-probnyy-2914').click();
  } else if (color107.checked) {
	document.getElementById('edit-submitted-probnyy-2915').checked=true;
	document.getElementById('edit-submitted-probnyy-2915').click();
  } else if (color108.checked) {
	document.getElementById('edit-submitted-probnyy-2916').checked=true;
	document.getElementById('edit-submitted-probnyy-2916').click();
  } else if (color109.checked) {
	document.getElementById('edit-submitted-probnyy-2917').checked=true;
	document.getElementById('edit-submitted-probnyy-2917').click();
  } else if (color110.checked) {
	document.getElementById('edit-submitted-probnyy-2918').checked=true;
	document.getElementById('edit-submitted-probnyy-2918').click();
  } else if (color111.checked) {
	document.getElementById('edit-submitted-probnyy-2919').checked=true;
	document.getElementById('edit-submitted-probnyy-2919').click();
  };
  
  if (color201.checked) {
	document.getElementById('edit-submitted-probnyy-2920').checked=true;
	document.getElementById('edit-submitted-probnyy-2920').click();
  } else if (color202.checked) {
	document.getElementById('edit-submitted-probnyy-2921').checked=true;
	document.getElementById('edit-submitted-probnyy-2921').click();
  } else if (color203.checked) {
	document.getElementById('edit-submitted-probnyy-2922').checked=true;
	document.getElementById('edit-submitted-probnyy-2922').click();
  } else if (color204.checked) {
	document.getElementById('edit-submitted-probnyy-2923').checked=true;
	document.getElementById('edit-submitted-probnyy-2923').click();
  } else if (color205.checked) {
	document.getElementById('edit-submitted-probnyy-2924').checked=true;
	document.getElementById('edit-submitted-probnyy-2924').click();
  } else if (color206.checked) {
	document.getElementById('edit-submitted-probnyy-2925').checked=true;
	document.getElementById('edit-submitted-probnyy-2925').click();
  } else if (color207.checked) {
	document.getElementById('edit-submitted-probnyy-2926').checked=true;
	document.getElementById('edit-submitted-probnyy-2926').click();
  } else if (color208.checked) {
	document.getElementById('edit-submitted-probnyy-2927').checked=true;
	document.getElementById('edit-submitted-probnyy-2927').click();
  } else if (color209.checked) {
	document.getElementById('edit-submitted-probnyy-2928').checked=true;
	document.getElementById('edit-submitted-probnyy-2928').click();
  } else if (color210.checked) {
	document.getElementById('edit-submitted-probnyy-2929').checked=true;
	document.getElementById('edit-submitted-probnyy-2929').click();
  } else if (color211.checked) {
	document.getElementById('edit-submitted-probnyy-2930').checked=true;
	document.getElementById('edit-submitted-probnyy-2930').click();
  };
  
  
  if (color301.checked) {
	document.getElementById('edit-submitted-probnyy-2931').checked=true;
	document.getElementById('edit-submitted-probnyy-2931').click();
  } else if (color302.checked) {
	document.getElementById('edit-submitted-probnyy-2932').checked=true;
	document.getElementById('edit-submitted-probnyy-2932').click();
  } else if (color303.checked) {
	document.getElementById('edit-submitted-probnyy-2933').checked=true;
	document.getElementById('edit-submitted-probnyy-2933').click();
  } else if (color304.checked) {
	document.getElementById('edit-submitted-probnyy-2934').checked=true;
	document.getElementById('edit-submitted-probnyy-2934').click();
  } else if (color305.checked) {
	document.getElementById('edit-submitted-probnyy-2935').checked=true;
	document.getElementById('edit-submitted-probnyy-2935').click();
  } else if (color306.checked) {
	document.getElementById('edit-submitted-probnyy-2936').checked=true;
	document.getElementById('edit-submitted-probnyy-2936').click();
  } else if (color307.checked) {
	document.getElementById('edit-submitted-probnyy-2937').checked=true;
	document.getElementById('edit-submitted-probnyy-2937').click();
  } else if (color308.checked) {
	document.getElementById('edit-submitted-probnyy-2938').checked=true;
	document.getElementById('edit-submitted-probnyy-2938').click();
  } else if (color309.checked) {
	document.getElementById('edit-submitted-probnyy-2939').checked=true;
	document.getElementById('edit-submitted-probnyy-2939').click();
  } else if (color310.checked) {
	document.getElementById('edit-submitted-probnyy-2940').checked=true;
	document.getElementById('edit-submitted-probnyy-2940').click();
  } else if (color311.checked) {
	document.getElementById('edit-submitted-probnyy-2941').checked=true;
	document.getElementById('edit-submitted-probnyy-2941').click();
  };
};

