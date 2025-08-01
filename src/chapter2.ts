//array
let numArr: number[] = [1, 2, 3, 4];

let strArr: string[] = ["hello", "hi", "BH"];

let boolArr: Array<boolean> = [true, false, true];

let multiArr: (number | string)[] = [1, "hello"];

//다차원 배열

let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 -> 길이, 타입 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "he", true];

const users: [string, number][] = [
  ["민병현", 1],
  ["민병현2", 2],
  ["민병현3", 3],
  ["민병현4", 4],
  // [5,'민병현'],
];
