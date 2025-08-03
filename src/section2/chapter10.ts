/** 
 대수타입
 여러개의 타입을 형성해 새롭게 만들어낸 타입
 합집함 타입, 교집합 타입이 존재
*/

//1. 합집합 -Union Type

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true, 2];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};
let union2: Union1 = {
  name: "",
  language: "",
};
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4 : Union1 = {
//   name : '',
// } 오류 두가지중 한가지는 만족을 해야된다.


// 2. 교집합 타입 - Intersection 타입

let variable : number & string //겹치는 값이 없기때문에 never타입으로 정의됨

type Intersection = Dog & Person;

let Intersection1 : Intersection = {
  name : '',
  color : '',
  language : '',
} //프로퍼티가 하나라도 빠지면 오류 