let table = document.createElement("table");
table.setAttribute('border','1');

for (let i = 0; i < 10; i++) {
    let newRow = table.insertRow(0);
    for (let j = 0; j < 10; j++) {
        let newCell = newRow.insertCell(0);
        newCell.className = "non_clicked td";
    }
}

document.getElementById("for_table").appendChild(table)

table.onclick = function(event) {
    let target = event.target;
    if (target.className == "non_clicked td" || target.className == "clicked td") {
        change_color_cell(target);
    }   
}

function change_color_cell (cell) {
    cell.className = (cell.className == "non_clicked td"? "clicked td": "non_clicked td" );
}

function change_color() {
    let arrCell = document.getElementsByTagName("td");
    for (let i = 0; i < arrCell.length; i++) { 
            arrCell[i].className = (arrCell[i].className =="non_clicked td"? "clicked td":"non_clicked td" );
    }
}
