/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

// interface Dog extends Animal {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

// 인터페이스 확장 extends
interface Dog extends Animal {
  // name : 'hello' // 재정의 할 수 있지만 원본타입의 서브타입으로만 재정의 할 수 있음.
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 1,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {
  //다중확장도 가능
}
