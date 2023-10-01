let grid = document.body.querySelector("#dynamic-grid");
let generateColumnButton = document.body.querySelector("#generate-column");
let generateRowButton = document.body.querySelector("#generate-row");
var rowCounter = 0;
var columnCounter = 0;

function columnCreator(currentRow, amountToAdd) {
  let thisRow = document.getElementById("row" + currentRow);
  for (let i = 2; i < amountToAdd + 2; i++) {
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

// Function to change cell color
function changeCellColor(event) {
  const selectedColor = colorPicker.value;
  const clickedCell = event.target;
  clickedCell.style.backgroundColor = selectedColor;
}


document.addEventListener("click", function (event) {
  if (event.target.classList.contains("box")) {
      changeCellColor(event);
  }
});


function clearAllCells() {
  const cells = document.querySelectorAll(".box");
  cells.forEach((cell) => {
      cell.style.backgroundColor = "white";
  });
}

clearAllButton.addEventListener("click", clearAllCells);

function colorAllCells() {
  const selectedColor = colorPicker.value;
  const cells = document.querySelectorAll(".box");
  cells.forEach((cell) => {
    cell.style.backgroundColor = selectedColor;
  });
}

colorAllButton.addEventListener("click", colorAllCells);


function colorAllUncolored() {
  const selectedColor = colorPicker.value;
  const cells = document.querySelectorAll(".box");

  cells.forEach((cell) => {
    // Get the computed style of the cell
    const computedStyle = getComputedStyle(cell);

    // Check if the background color is white (in any format)
    if (
      computedStyle.backgroundColor === "rgb(255, 255, 255)" ||
      computedStyle.backgroundColor === "#ffffff" ||
      computedStyle.backgroundColor.toLowerCase() === "white" ||
      computedStyle.backgroundColor === "rgba(0, 0, 0, 0)" // Fully transparent
    ) {
      cell.style.backgroundColor = selectedColor;
    }
  });
}

const colorAllUncoloredButton = document.querySelector("#colorAllUncoloredButton");
colorAllUncoloredButton.addEventListener("click", colorAllUncolored);

