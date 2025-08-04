/**
 * interface 합치기
 */

// type Person = {
//   name : string
// }
// type Person = {
//   name : string
// } 에러

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "민병현",
  age: 28,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}  

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello'
};
