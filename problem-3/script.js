function newRow {
    var table = document.getElementById("myTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    headerCell.innerHTML = "Difficulty";
    cell2.innerHTML = "Easiest";
    cell3.innerHTML = "Harder";
    cell4.innerHTML = "Hardest";
}
    
