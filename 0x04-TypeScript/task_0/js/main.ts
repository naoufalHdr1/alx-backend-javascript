// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 21,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

// Create an array containing the two students
const studentList: Array<Student> = [student1, student2];

// Function to add styles to the document head
const addStyles = (): void => {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    
    table {
      width: 50%;
      margin: 20px auto;
      border-collapse: collapse;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    }
    
    th, td {
      padding: 12px;
      border: 1px solid #ddd;
      text-align: left;
    }
    
    th {
      background-color: #4CAF50;
      color: white;
    }
    
    td {
      background-color: #f9f9f9;
    }
  `;
  document.head.appendChild(style);
};

// Function to render the student table
const renderTable = (): void => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // Create and append table header row
  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  const headerLocation = document.createElement('th');
  
  headerFirstName.textContent = 'First Name';
  headerLocation.textContent = 'Location';
  
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  
  tbody.appendChild(headerRow);

  // Loop through each student in the studentList array
  studentList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  document.body.appendChild(table);
};

// Add styles and render the table
addStyles();
renderTable();
