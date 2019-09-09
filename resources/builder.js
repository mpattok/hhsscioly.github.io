headStuff.innerHTML = headStuff.innerHTML +
`<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="charset" content="utf-8">
<link rel="stylesheet" href="`+toRoot+`resources/style.css">
<link rel="shortcut icon" href="`+toRoot+`resources/icon.ico" type="image/x-icon">
`;
var body =
`<header style="background-color: #0B1692;">
<table width="100%">
<tr>
<td width="10%"><a href="http://www.hassk12.org" target="_blank"><img src="`+toRoot+`resources/saxons.png"></a></td>
<td colspan="3">
<h1 style="color: gold;">Hastings High School<br>Science Olympiad</h1>
</td>
</tr>
<tr>
<td class="pagetitle" colspan="2" width="50%"><a>`+title+`</a></td>
<td style="text-align: right;" colspan="2">
<div class="headlink">`;
for(var x = 0; x < links.length; x++) {
  body = body + `<a href="`+links[x]+`">`+linkNames[x]+`</a>`;
}
body = body + `
</div>
<div class="dropNav">
<a id="dropButton">&#8801;</a>
</div>
</td>
</tr>
</table>
</header>
<div class="dropNavButton">
<div id="dropLinks">`;
for(var x = 0; x < links.length; x++) {
  body = body + `<a href="`+links[x]+`">`+linkNames[x]+`</a><br>\n`;
}
body = body + `</div>
</div>
<div style="padding: 1em;">`+content+`</div>`;
bodyStuff.innerHTML = body;
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