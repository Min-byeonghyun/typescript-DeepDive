// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

//어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "말티즈",
};

animal = dog; //가능

// dog = animal //불가능

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
  name: "타입스크립트",
  price: 30000,
  skill: "typescript",
};

book = programmingBook;
// programmingBook = book  에러X

//초과 프로퍼티 검사 변수를 초기화할떄 실제 프로퍼티를 정의하면 막는 검사가 실행됨
//
let book2: Book = {
  name: "타입스크립트",
  price: 30000,
  // skill: "typescript",
};



