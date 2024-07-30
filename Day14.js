// Day 14: Classes

// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age and a method to return a greeting message. Create an instance of the class and log the greet message.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and my age is ${this.age}`;
  }

  // Task 2: Add a method to the Person class that updates the age property and logs the updated age.
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated Age is ${this.age}`);
  }

  // Activity 3: Static Method and properties
  // Task 5: Add a static method to the Person class that returns a generic greeting message. Call the static method without creating an instance of the class.
  static genericGreet() {
    return `Hello, this is a generic greeting message from the Person class.`;
  }

  // Task 6: Add a static method to the Person class to keep track of the number of students created.
  static incrementStudentCount() {
    if (!Person.studentCount) {
      Person.studentCount = 0;
    }
    Person.studentCount++;
  }

  static getStudentCount() {
    return Person.studentCount || 0;
  }

  // Task 7: Add a getter method to the Person class to return the full name (first name and last name).
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Task 8: Add a setter method to the Person class to update the full name (first name and last name).
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age); 
    this.studentId = studentId; 
    Person.incrementStudentCount(); // Increment the student count whenever a new student is created
  }

  getStudentId() {
    return `Student ID is ${this.studentId}`;
  }

  // Task 4: Override the greeting method in the Student class to include the student id in the message. Log the overridden greet method.
  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName}, my age is ${this.age}, and my student ID is ${this.studentId}`;
  }
}

const studentInstance1 = new Student("Twinkle", "Star", 22, "S12345");
console.log(studentInstance1.getStudentId()); // Output: Student ID is S12345
console.log(studentInstance1.greet()); // Output: Hello, my name is Twinkle Star, my age is 22, and my student ID is S12345

const studentInstance2 = new Student("Alice", "Wonderland", 23, "S12346");
console.log(studentInstance2.getStudentId()); // Output: Student ID is S12346
console.log(studentInstance2.greet()); // Output: Hello, my name is Alice Wonderland, my age is 23, and my student ID is S12346

// Call the static method without creating an instance of the class
console.log(Person.genericGreet()); // Output: Hello, this is a generic greeting message from the Person class.

// Log the total number of students created
console.log(`Total number of students: ${Person.getStudentCount()}`); // Output: Total number of students: 2

// Task 7: Log the full name using getter
console.log(studentInstance1.fullName); // Output: Twinkle Star

// Task 8: Update the name using setter
studentInstance1.fullName = "Twinkle Choudhary";
console.log(studentInstance1.fullName); // Output: Twinkle Choudhary
console.log(studentInstance1.greet()); // Output: Hello, my name is Twinkle Choudhary, my age is 22, and my student ID is S12345

//Activity 5:

// Task 9: Define a class Account with a private field for balance and methods to deposit and withdraw money.
// Ensure that the balance can only be updated through these methods.

class Account {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Invalid withdrawal amount.");
    }
  }

  // Method to get the current balance
  getBalance() {
    return this.#balance;
  }
}

// Task 10: Create an instance of Account class and test the deposit and withdraw methods, logging the balance after each.
const myAccount = new Account(1000); // Initial balance of $1000

// Testing the deposit method
myAccount.deposit(500); // Expected output: Deposited: $500. New balance: $1500

// Testing the withdraw method
myAccount.withdraw(200); // Expected output: Withdrew: $200. New balance: $1300

// Invalid deposit
myAccount.deposit(-100); // Expected output: Deposit amount must be positive.

// Invalid withdrawal
myAccount.withdraw(2000); // Expected output: Invalid withdrawal amount.

// Check final balance
console.log(`Final balance: $${myAccount.getBalance()}`); // Expected output: Final balance: $1300
