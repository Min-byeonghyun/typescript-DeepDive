/**
 * 타입스크립트에서의 클래스
 */

const employee = {
  name: "민병현",
  age: 28,
  position: "FE-Developer",
  work() {
    console.log("일 중");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일 중");
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("민병현", 28, "FE-Developer");

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
