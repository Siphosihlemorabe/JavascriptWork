class Employee {
  constructor(firstName, lastName, yearsWorked) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsWorked = yearsWorked;
  }

  // Prototype method to return details
  getDetails() {
    return `${this.firstName} ${this.lastName} has worked for ${this.yearsWorked} years.`;
  }
}

// Create employees
const employee1 = new Employee("John", "plane", 5);
const employee2 = new Employee("Kop", "Smith", 3);
const employee3 = new Employee("Michael", "Mabee", 8);

// Add employees to an array
const employees = [employee1, employee2, employee3];

// Iterate through the array to output results with additional text
employees.forEach((employee) => {
  console.log(
    `Employee ${employee.firstName} ${employee.lastName} has been with the company for ${employee.yearsWorked} years.`
  );
});
