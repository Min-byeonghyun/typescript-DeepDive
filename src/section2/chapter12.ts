/**
 * 타입 단언 -> type assertion
 */
type Person = {
  name: string;
  age: number;
};
let person = {} as Person;

person.name = "민병현";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog : Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "말티즈",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string // 겹치지않아 오류

/**
 * const 단언
 */
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// as const readonly로 변경해줌
// cat.name = 'd' 오류 readonly이기때문에

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "민병현",
};

const len: number = post.author!.length; // 있어! -> !연산자 -> null undefined가 아닐꺼라고 믿기때문에 가능
// const len1 : number = post.author?.length // undefined가 될수있기때문에 오류가 남
