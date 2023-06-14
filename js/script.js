/*-----------------------------------------------*/
/* DinoCalc 1.3
/* © copyright 2018
/* Bruce McMurtrie Jr.
/* all rights reserved
/* www.BruceMcMurtrie.com
/*
/* Todo:
/*  Add database connect for saving entries
/*-----------------------------------------------*/

// Set DinoCalc version
var dinoVersion = 1.3;

// Print DinoCalc version
$(".dinoVersion").text(dinoVersion);
$("title").text("DinoCalc v" + dinoVersion + " | by Bruce McMurtrie Jr");

// Main function for tip calculation
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
  document.getElementById("output").innerHTML += "*************************************";
  for (var i = 0; i < empHours.length; i++) {
    document.getElementById("output").innerHTML += "<p class=\"outputList\">" + nameArr[i] + " - $" + Math.floor(empTips[i]) + "</p>";
  }
}

// Pressing Enter executes addRows()
$("#numAddRows").keypress(function(event){
  if(event.which === 13){
    addRows();
    // then, clear the input
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

// Set the reused column content
var colDry = "<span class=\"addBelow\">+</span> <span class=\"removeRow\">-</span>";

// Create the initial row
createRow();

// Create a row at the end of the table
function createRow() {
  // create row node
  var row = document.createElement('tr');
  // create column nodes
  var col = document.createElement('td');
  var col2 = document.createElement('td');
  var col3 = document.createElement('td');
  var col4 = document.createElement('td');
  var col5 = document.createElement('td');
  // append columns to row
  row.appendChild(col);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);
  // put data in columns
  col.innerHTML = "Name: ";
  col2.innerHTML = "<input type=\"text\" name=\"empName\" class=\"empName\" placeholder=\"Name\">";
  col3.innerHTML = "Hours: ";
  col4.innerHTML = "<input type=\"number\" name=\"empHours\" class=\"empHours\" value=\"0\">";
  col5.innerHTML = colDry;
  // select table to append to
  var table = document.getElementById("tableToModify");
  row.className = "lineItems";
  // append row to table
  table.appendChild(row);
}

// Create row below the current row when '+' is clicked
$("#tableToModify").on("click",".addBelow", function(){
  var tr1 = "<tr class=\"lineItems\">";
  var col = "<td>Name: </td>";
  var col2 = "<td><input type=\"text\" name=\"empName\" class=\"empName\" placeholder=\"Name\"></td>";
  var col3 = "<td>Hours: </td>";
  var col4 = "<td><input type=\"number\" name=\"empHours\" class=\"empHours\" value=\"0\"></td>";
  var col5 = "<td>" + colDry + "</td>";
  var tr2 = "</tr>";
  $(this).closest("tr").after(tr1 + col + col2 + col3 + col4 + col5 + tr2);
})

// Delete current row when '-' is clicked
$("#tableToModify").on("click", ".removeRow", function(){
  $(this).closest("tr").remove();
  event.stopPropagation();
})

// Delete the last row in the table
function deleteRow() {
  var rows = document.getElementsByClassName("lineItems");
  if(rows.length > 1){
    document.getElementById("tableToModify").deleteRow(rows.length - 1);
  }
}

// Select the DinoCalc title
var dinoTitle = document.getElementById("title");
// Highlight the title on mouse over
dinoTitle.addEventListener("mouseover", function(){
  dinoTitle.classList.toggle("title");
});
dinoTitle.addEventListener("mouseout", function(){
  dinoTitle.classList.toggle("title");
});