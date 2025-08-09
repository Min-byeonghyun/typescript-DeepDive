/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> |
// StringNumberSwitch<string> 유니온을 쓰게되면 분산적으로 들어가게됨

let d: StringNumberSwitch<boolean | number | string>;
// 1 단계
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2 단계
// 첫번째 결과 number
// 두번째 결과 string
// 세번째 결과 number

// 결과
// number | string | number  -> number | string 유니온 타입이 됨

/**
 * 실용적인 예제
 * T가 U의 서브타입이라면 참이되서 never타입이되고 아니라면 거짓이 되어서 T의 타입을 가지게됨
 */

type Exclude<T, U> = T extends U ? never : T;

let t: Exclude<10, number>;
let u: Exclude<number, 10>;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// Exclude<number, string> ; 여기서 number가 string에 서브타입이 아니기 때문에 number
// Exclude<string, string> ; string, string 이기때문에 참이되어서 never
// Exclude<boolean, string> ; boolean이 string에 서브타입이 아니기때문에 boolean

// 결과
// number | never | boolean
// never는 공집합이기때문에 number | boolean 유니온 타입이 결과적으로 나옴.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number,string> |
// Extract<string,string> |
// Extract<boolean,string>

// 2단계
// Extract<number,string> 여기서 number가 string에 서브타입이 아니기떄문에 never
// Extract<string,string> 여기서 string,string이기떄문에 string 타입
// Extract<boolean,string> 여기서 boolean 이 string타입의 서브타입이 아니기때문에 never

// 결과
// never | string | never
// never = 공집합이기때문에 string만 나오게 된다.
