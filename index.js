const grid = document.body.querySelector("#dynamic-grid");
const generateColumnButton = document.body.querySelector("#generate-column");
const generateRowButton = document.body.querySelector("#generate-row");
const removeColumnButton = document.body.querySelector("#remove-column");
const removeRowButton = document.body.querySelector("#remove-row");
const colorAllUncoloredButton = document.querySelector(
	"#colorAllUncoloredButton"
);
var rowCounter = 0;
var columnCounter = 0;

// Column Creator Function
function columnCreator(currentRow, amountToAdd) {
	let thisRow = document.getElementById("row" + currentRow);
	for (let i = 2; i < amountToAdd + 2; i++) {
		let newColumn = document.createElement("td");
		newColumn.className = "box";
		newColumn.id = "row" + currentRow + "-column" + i;
		thisRow.appendChild(newColumn);
	}
}

// Column Button Event Listener
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
			let currentRow = document.getElementById("row" + i);
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

// Row Button Event Listener
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

// Clear Colors Function
function clearAllCells() {
	const cells = document.querySelectorAll(".box");
	cells.forEach((cell) => {
		cell.style.backgroundColor = "white";
	});
}

// Clear Colors Event Listener
clearAllButton.addEventListener("click", clearAllCells);

// Color All Cells Function
function colorAllCells() {
	const selectedColor = colorPicker.value;
	const cells = document.querySelectorAll(".box");
	cells.forEach((cell) => {
		cell.style.backgroundColor = selectedColor;
	});
}

// Color All Event Listener
colorAllButton.addEventListener("click", colorAllCells);

// Color All Uncolored Function
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

// Color All Uncolored Event Listener
colorAllUncoloredButton.addEventListener("click", colorAllUncolored);

// Remove Column Event Listener
removeColumnButton.addEventListener("click", removeColumn);

function removeColumn() {
	if (columnCounter > 0) {
		for (let i = 0; i < rowCounter; i++) {
			grid.rows[i].deleteCell(-1);
		}
		columnCounter--;

		if (columnCounter === 0) {
			for (let j = 0; j < rowCounter; j++) {
				grid.deleteRow(-1);
			}
			rowCounter = 0;
		}
		console.log(
			"Column Counter after remove: " +
				columnCounter +
				" rowCounter: " +
				rowCounter
		);
	}
}
