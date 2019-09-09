var toRoot = "../";
var links = ["../","../schedule/","../events/","../pictures/"];
var linkNames = ["Home","Schedule","Events","Pictures"];
var content = `
<h1>`+title+`</h1>
<p>`+type+` Event</p>
<p><b>Useful Links:</b><br>`;
title = title.replace("&","and").replace(/ /g,"-");
content = content + `<a href="https://www.soinc.org/`+title.toLowerCase().replace("of-","")+`-c" target="_blank">Official Science Olympiad page for this event</a><br>
<a href="https://scioly.org/wiki/index.php/`+title.replace(/-/g,"_")+`" target="_blank">Science Olympiad Student Center page for this event</a>
<h3><a target="_blank" href="https://drive.google.com/open?id=`+resourceId+`">Event Resources (click here to view in a separate tab):</a></h3>
<iframe src="https://drive.google.com/embeddedfolderview?id=`+resourceId+`#grid" width="99%" height="500">An error occured. Click the link above to view the resources for this event in a separate tab.</iframe>
<h3><a target="_blank" href="rules/`+title.toLowerCase()+`-rules.pdf">Rules (click here to view PDF in separate tab):</a></h3>
<iframe width="99%" height="850px" src="rules/`+title.toLowerCase()+`-rules.pdf">An error occured. Click the link above to view the rules in a separate tab.</iframe>`;
title = title.replace(/-/g," ").replace("and","&");
