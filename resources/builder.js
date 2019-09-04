headStuff.innerHTML =
`<title>HHS Science Olympiad | `+title+`</title>
<link rel="stylesheet" href="`+toRoot+`resources/style.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="charset" content="utf-8">
<meta name="keywords" content="science, olympiad, scio, scioly, hastings, high, school, hs, hhs, saxon, saxons, ` + keywords + `">
<meta name="description" content="Hastings High School, Hastings, MI. - Science Olympiad - `+description+`">
<meta name="author" content="Matthew Pattok">
<link rel="shortcut icon" href="`+toRoot+`resources/icon.ico" type="image/x-icon">
`;
bodyStuff.innerHTML = 
`<header style="background-color: #0B1692;">
<table width="100%">
<tr>
<td width="10%"><a href="http://www.hassk12.org" target="_blank"><img src="`+toRoot+`resources/saxons.png"></a></td>
<td colspan="3">
<h1 style="color: gold;">Hastings High School<br>Science Olympiad</h1>
</td>
</tr>
<tr>
<td class="pagetitle" colspan="2" width="40%"><a>`+title+`</a></td>
<td></td>
<td style="text-align: right; ">
<div class="headlink">
<a href="`+toRoot+linkOne+`.html">`+linkOne.substr(0,1).toUpperCase()+linkOne.substr(1,linkOne.length)+`</a><a href="`+toRoot+linkTwo+`.html">`+linkTwo.substr(0,1).toUpperCase()+linkTwo.substr(1,linkTwo.length)+`</a><a href="`+toRoot+linkThree+`.html">`+linkThree.substr(0,1).toUpperCase()+linkThree.substr(1,linkThree.length)+`</a><a id="link4" href="`+toRoot+linkFour+`.html">`+linkFour.substr(0,1).toUpperCase()+linkFour.substr(1,linkFour.length)+`</a>
</div>
<div class="dropNav">
<a id="dropButton">&#8801;</a>
</div>
</td>
</tr>
</table>
</header>
<div class="dropNavButton">
<div id="dropLinks">
<a href="`+toRoot+linkOne+`.html">`+linkOne.substr(0,1).toUpperCase()+linkOne.substr(1,linkOne.length)+`</a><br>
<a href="`+toRoot+linkTwo+`.html">`+linkTwo.substr(0,1).toUpperCase()+linkTwo.substr(1,linkTwo.length)+`</a><br>
<a href="`+toRoot+linkThree+`.html">`+linkThree.substr(0,1).toUpperCase()+linkThree.substr(1,linkThree.length)+`</a><br>
<a id="dropLink4" href="`+toRoot+linkFour+`.html">`+linkFour.substr(0,1).toUpperCase()+linkFour.substr(1,linkFour.length)+`</a>
</div>
</div>`;
if(linkFour == "") {
  link4.style.display = "none";
  dropLink4.style.display = "none";
}
bodyStuff.innerHTML = bodyStuff.innerHTML + `
<div style="padding: 1em;">`+content+`</div>`;
var showDropLinks = false;
dropButton.onclick = function() {
  if(showDropLinks) {
    showDropLinks = false;
    dropLinks.style.display = "none";
  } else {
    showDropLinks = true;
    dropLinks.style.display = "inline-block";
  }
}