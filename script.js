/*-------------------------*/
/* DinoCalc 1.2
/* © copyright 2018
/* Bruce McMurtrie Jr.
/* all rights reserved
/* www.BruceMcMurtrie.com
/*-------------------------*/

function calcTips(){
  var nameArr = [];
  var hoursArr = [];
  var empName = document.querySelectorAll(".empName");
  var empHours = document.querySelectorAll(".empHours");
  var totalTips = Number(document.getElementById("totalTips").value);
  var hourTotal = 0;
  var perHour = 0;
  var empTips = [];

  // Set the HTML of 'output' to nothing first thing
  // so the list doesn't add to itself
  document.getElementById("output").innerHTML = " ";

  // Calculate total hours worked first
  for (var i = 0; i < empHours.length; i++) {
    hourTotal += Number(empHours[i].value);
  }

  // Push inputs into nameArr and hoursArr
  for (var i = 0; i < empHours.length; i++) {
    nameArr.push(empName[i].value);
    hoursArr.push(Number(empHours[i].value));
  }

  // Calculate the tips per hour
  for (var i = 0; i < empHours.length; i++) {
    perHour = totalTips / hourTotal;
  }

  // Push each empTips into an array
  for (var i = 0; i < empHours.length; i++) {
    empTips.push(perHour * hoursArr[i]);
  }

  // Print results
  document.getElementById("output").innerHTML += "<p><strong>Total Hours: " + hourTotal.toFixed(2) + "</strong></p>";
  document.getElementById("output").innerHTML += "<p><strong>Tips Per Hour: " + perHour.toFixed(2) + "</strong></p>";
  document.getElementById("output").innerHTML += "********************";
  for (var i = 0; i < empHours.length; i++) {
    document.getElementById("output").innerHTML += "<p class=\"outputList\">" + nameArr[i] + " - $" + Math.floor(empTips[i]) + "</p>";
  }
}

// jQuery: on pressing Enter exec addRows()
// then, clear the input
$("#numAddRows").keypress(function(event){
  if(event.which === 13){
    addRows();
    $(this).val("");
    };
});

// Add rows based on user input
function addRows(){
  var num = Number(document.querySelector("#numAddRows").value);
  $("#numAddRows").val("");
  for (var i = 0; i < num; i++) {
    createRow();
  }
}

// Create a row at the end of the table
function createRow() {
  var row = document.createElement('tr'); // create row node
  var col = document.createElement('td'); // create column node
  var col2 = document.createElement('td'); // create second column node
  var col3 = document.createElement('td');
  var col4 = document.createElement('td');
  row.appendChild(col); // append first column to row
  row.appendChild(col2); // append second column to row
  row.appendChild(col3);
  row.appendChild(col4);
  col.innerHTML = "Name: "; // put data in first column
  col2.innerHTML = "<input type=\"text\" name=\"empName\" class=\"empName\" value=\"Name\">"; // put data in second column
  col3.innerHTML = "Hours: ";
  col4.innerHTML = "<input type=\"number\" name=\"empHours\" class=\"empHours\" value=\"0\">";
  var table = document.getElementById("tableToModify"); // find table to append to
  row.className = "lineItems";
  table.appendChild(row); // append row to table
}

// Delete the last row in the table
function deleteRow() {
  var rows = document.getElementsByClassName("lineItems");
  if(rows.length > 1){
    document.getElementById("tableToModify").deleteRow(rows.length - 1);
  }
}

// Highlight the title on mouse over
var dinoTitle = document.getElementById("title");

dinoTitle.addEventListener("mouseover", function(){
  dinoTitle.classList.toggle("title");
});
dinoTitle.addEventListener("mouseout", function(){
  dinoTitle.classList.toggle("title");
});