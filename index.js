function search(inputElement) {
  // Convert input text to lowercase for case-insensitive comparison
  const searchText = inputElement.value.toLowerCase();

  // Get all rows in the table except the header row
  const rows = document.querySelectorAll(".collection .rows");
  let found = 0;
  // Loop through all rows, hide those that don't match the search text
  rows.forEach((row) => {
    // Get the text content of the second cell (Name column) and convert it to lowercase
    const name = row.querySelector(".data-name").textContent.toLowerCase();

    // If the name includes the search text, show the row; otherwise, hide it
    if (name.includes(searchText)) {
      row.style.display = "";
      found++;
    } else {
      row.style.display = "none";
    }
  });
}

function addDataToTable(name, email, contact) {
  // Get the table body by ID
  const tableBody = document.getElementById("tableBody");

  // Create a new row
  const newRow = document.createElement("tr");
  newRow.classList.add("rows"); // Add the 'rows' class to the new row

  // Add cells (td) for serial number, name, email, and contact
  const serialNumberCell = newRow.insertCell(0);
  const nameCell = newRow.insertCell(1);
  const emailCell = newRow.insertCell(2);
  const contactCell = newRow.insertCell(3);

  // Get the next serial number by counting the existing rows
  const serialNumber = tableBody.rows.length + 1;
  serialNumberCell.textContent = serialNumber + ".";

  // Set the text content for each cell
  nameCell.textContent = name;
  nameCell.classList.add("data-name"); // Add the 'data-name' class to the name cell
  emailCell.textContent = email;
  contactCell.textContent = contact;

  // Append the new row to the table body
  tableBody.appendChild(newRow);
}

const addNewData = () => {
  const table = document.getElementById("tb");
  table.style.display = "none";
  const inpBox = document.getElementById("inp_box");
  inpBox.style.visibility = "visible";
  console.log(table);
};

const addData = () => {
  const table = document.getElementById("tb");
  const getName = (document = document.getElementById("addName").value);
  const getEmail = (document = document.getElementById("addEmail").value);
  const getContact = (document = document.getElementById("addContact").value);
  addDataToTable(getName, getEmail, getContact);
  table.style.display = "";
  const inpBox = document.getElementById("inp_box");
  inpBox.style.visibility = "hidden";
};
