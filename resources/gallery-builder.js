var title = words[0] + "-" + words[3] + " Pictures";
var keywords = ", pics, pictures, galleries, gallery, " + words[0] + ", " + words[1] + ", " + words[2] + ", " + words[3];
var description = "Pictures from the " + words[0] + "-" + words[3] + " School Year Season";
var toRoot = "../../";
var linkOne = "home";
var linkTwo = "schedule";
var linkThree = "events";
var linkFour = "pictures";
var content = `
<div width="100%" style="text-align: center;">
<div width="100%" style="display: inline-block;">
<table style="max-width: 800px;">
<tr>
<th>
<button id="left">&#10094;</button>
</th>
<th id="picture" colspan="3"></th>
<th>
<button id="right">&#10095;</button>
</th>
</tr>
<tr>
<td></td>
<td id="pause">&#10074;&#10074;</td>
<td id="below"><span id="caption" style="text-align: center;"></span><br><span id="dots" style="text-align: center;"></span></td>
<td style="width: 5%"></td>
<td></td>
</tr>
</table>
</div>
</div>
<table>
`;
var rowsize = 3;
if(screen.width < 970) {rowsize = 2;}
if(screen.width < 500) {rowsize = 1;}
for(var x = 0; x < pics.length; x++) {
  if(Number.isInteger(x/rowsize)) {content = content + `<tr>`;}
  content = content + `<td style="width: `+(100/rowsize)+`%;"><table><tr><td style="text-align: center;"><img style="display: inline-block; max-width: 90%;" src="`+pics[x]+`" style="max-width: 90%; max-height: 90%;"></td></tr><tr><td style="text-align: center;">`+captions[x]+`</td></tr></table></td>`;
  if(Number.isInteger((x+1)/rowsize)) {content = content + `</tr>`;}
}
if(!Number.isInteger((x+1)/rowsize)) {content = content + `</tr>`;}
content = content + `</table>`;