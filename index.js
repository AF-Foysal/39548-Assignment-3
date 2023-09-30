let grid = document.body.querySelector("#dynamic-grid");
let generateColumnButton = document.body.querySelector("#generate-column");
let generateRowButton = document.body.querySelector("#generate-row");
var rowCounter = 0;
var columnCounter = 0;

function columnCreator() {}
generateColumnButton.addEventListener("click", () => {
  if (rowCounter === 0) {
    rowCounter += 1;
    columnCounter += 1;
    let myColumn = document.createElement("td");
    myColumn.id = "column" + columnCounter;
    myColumn.className = "box";
    grid.appendChild(myColumn);
  } else {
    columnCounter += 1;
    // let myColumn = document.createElement("td");
    // let currentRow = document.getElementById("row"+rowCounter)
    // myColumn.id = "column" + columnCounter;
    // myColumn.className = "box";
    // currentRow.appendChild(myColumn);
    for (let i = 1; i <= rowCounter; i++) {
      let myColumn = document.createElement("td");
      let currentRow = document.getElementById("row" + i);
      myColumn.id = "column" + columnCounter;
      myColumn.className = "box";
      currentRow.appendChild(myColumn);
    }
  }
  console.log("ColumnCount: ", columnCounter);
});

generateRowButton.addEventListener("click", () => {
  rowCounter += 1;
  let myRow = document.createElement("tr");
  let rowData = document.createElement("td");
  myRow.id = "row" + rowCounter;
  rowData.className = "box";
  grid.appendChild(myRow);
  myRow.appendChild(rowData);
  myRow.appendChild(rowData);

  //   else {
  //     rowCounter += 1;
  //     for (let i = 1; i < columnCounter; i++) {
  //       let myRow = document.createElement("tr");
  //       let rowData = document.createElement("td");
  //       let currentColumn = document.getElementById("column" + i);
  //       myRow.id = "row" + rowCounter;
  //       rowData.className = "box";
  //       grid.appendChild(myRow);
  //       grid.appendChild(rowData);
  //     }
  //   }

  console.log("RowCount: ", rowCounter);
});
