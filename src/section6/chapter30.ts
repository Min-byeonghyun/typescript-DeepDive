/**
 * key of 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  //name | age >> keyof Person 유니온으로 추가가됨  > keyof 타입
  return person[key];
}

// const person: Person = {
//   name: "민병현",
//   age: 28,
// };

const person = {
  name: "민병현",
  age: 28,
};

getPropertyKey(person, "name");
