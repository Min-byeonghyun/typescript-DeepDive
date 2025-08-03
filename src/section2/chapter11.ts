/**
 * 타입 추론
 * 추론할 정보가있으면 자동으로 추론된다.
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "민병현",
  profile: {
    nickname: "MB",
  },
  urls: ["https://MB.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = 'hello') {
  return 'hello'
}

// 암묵적 any -> any타입 진화
let d;
d = 10;
d.toFixed();

d= 'hello';
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = 'hello';

let arr =[1, 'string']