var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var date = new Date();
var position = [date.getMonth(), date.getFullYear()];
/*  test
alert("Today is "+days[date.getDay()]+", "+months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear());
*/
calendarHere.innerHTML = `<table style="border: none;">
<tbody>
<tr>
<th style="border: none; cursor: pointer;"><h1 onclick="position[0] = position[0] - 1;if(position[0] == -1) {position[0] = 11;position[1] = position[1] - 1;}makeCalendar();"><<</h1></th>
<th style="border: none;" colspan="5"><h1 id="month"></h1></th>
<th style="border: none; cursor: pointer;"><h1 onclick="position[0] = position[0] + 1;if(position[0] == 12) {position[0] = 0;position[1] = position[1] + 1;}makeCalendar();">>></h1></th>
</tr>
</tbody>
</table>
<div id="realCalendar"></div>`;
function makeCalendar() {
  var calendar = `<table>
<tbody>
<tr>
<th>Sunday</th>\n<th>Monday</th>\n<th>Tuesday</th>\n<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n<th>Saturday</th>\n</tr>\n`;
  month.innerHTML = months[position[0]] + " " + position[1].toString();
  var firstOfMonth = new Date(position[1],position[0],1);
  firstDay = firstOfMonth.getDay() + 1;
  var nOfDays = monthLengths[position[0]];
  if (position[0] == 1 && Number.isInteger(position[1] / 4)) {
    nOfDays++;
  }
  var x = 1;
  if(firstDay > 1) {
    calendar = calendar + "<tr>";
    for(var i = 1; i < firstDay; i++) {
      x++;
      calendar = calendar + "<td> </td>\n"
    }
  }
  for (i = 1; i <= nOfDays; i++) {
    if (x == 1) {
     calendar = calendar + `<tr> \n`;
    }
    calendar = calendar + `<td>\n` + i.toString();
    var dateCode = (position[0] + 1).toString() + "-" + i.toString() + "-" + position[1].toString();
    for (var j = 0; j < events.length; j++) {
      if (dateCode == events[j][0]) {
        calendar = calendar + "<br>"+events[j][1];
      }
    }
    calendar = calendar + `</td>\n`;
    x++;
    if (x == 8) {
      calendar = calendar + "</tr>\n";
      x = 1;
    }
  }
  if(x != 1) {
    calendar = calendar + "</tr> \n";
  }
  calendar = calendar + "</tbody>\n</table>\n";
  realCalendar.innerHTML = calendar;
}
makeCalendar();
/*
lastMonth.onclick = function() {
  position[0] = position[0] - 1;
  if(position[0] == -1) {
    position[0] = 11;
    position[1] = position[1] - 1;
  }
  makeCalendar();
}
nextMonth.onclick = function() {
  position[0] = position[0] + 1;
  if(position[0] == 12) {
    position[0] = 0;
    position[1] = position[1] + 1;
  }
  makeCalendar();
}
*/