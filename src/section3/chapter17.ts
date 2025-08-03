/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;   // number리터럴 <- number 다운캐스팅 X

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;  // 이건 업캐스팅 왜안될까? 매개변수의 타입으로 호환성을 판단할때는 업캐스팅일때 안된다고 판단함
d = c;

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 2-2 매개변수의 개수가 다를때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;


let func1 : Func1 = (a,b) => {}
let func2 : Func2 = (a) => {}

func1 = func2    // func2(매개변수개수 2개) <- func1(매개변수 1개) 기때문에 호환이 된다
// func2 = func1   // func2(매개변수개수 1개) <- func1(매개변수 2개) 기때문에 호환이 되지않음
