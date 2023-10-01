let grid = document.body.querySelector("#dynamic-grid");
let generateColumnButton = document.body.querySelector("#generate-column");
let generateRowButton = document.body.querySelector("#generate-row");
var rowCounter = 0;
var columnCounter = 0;

function columnCreator(currentRow, amountToAdd) {
  let thisRow = document.getElementById("row" + currentRow);
  for (let i = 0; i < amountToAdd; i++) {
    let newColumn = document.createElement("td");
    newColumn.className = "box";
    newColumn.id = "row" + currentRow + "-column" + i;
    thisRow.appendChild(newColumn);
  }
}
generateColumnButton.addEventListener("click", () => {
  if (rowCounter === 0 && columnCounter === 0) {
    rowCounter += 1;
    columnCounter += 1;
    let myRow = document.createElement("tr");
    let rowData = document.createElement("td");
    myRow.id = "row" + rowCounter;
    rowData.className = "box";
    rowData.id = "row" + rowCounter + "-column" + columnCounter;
    grid.appendChild(myRow);
    myRow.appendChild(rowData);
  } else {
    for (let i = 1; i <= rowCounter; i++) {
      console.log("row counter at iteration:", rowCounter, "i: ", i);
      let currentRow = document.getElementById("row" + i);
      console.log(currentRow);
      let myColumn = document.createElement("td");
      var tempColumn = columnCounter + 1;
      myColumn.id = "row" + i + "-column" + tempColumn;
      myColumn.className = "box";
      currentRow.appendChild(myColumn);
    }
    columnCounter += 1;
  }
  console.log("ColumnCount: ", columnCounter, "rowCount:", rowCounter);
});

generateRowButton.addEventListener("click", () => {
  if (columnCounter === 0 && rowCounter === 0) {
    rowCounter += 1;
    columnCounter += 1;
    let myRow = document.createElement("tr");
    let rowData = document.createElement("td");
    myRow.id = "row" + rowCounter;
    rowData.className = "box";
    rowData.id = "row" + rowCounter + "-column" + columnCounter;
    grid.appendChild(myRow);
    myRow.appendChild(rowData);
  } else {
    rowCounter += 1;
    let myRow = document.createElement("tr");
    let rowData = document.createElement("td");
    myRow.id = "row" + rowCounter;
    rowData.className = "box";
    rowData.id = "row" + rowCounter + "-column" + "1";
    grid.appendChild(myRow);
    myRow.appendChild(rowData);
    columnCreator(rowCounter, columnCounter - 1);
  }
  console.log("RowCount: ", rowCounter, "ColumnCount: ", columnCounter);
});
