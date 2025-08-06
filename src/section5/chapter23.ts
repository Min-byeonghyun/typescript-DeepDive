/**
 * 제네릭 -> 일반적인 포괄적인 -> 제네럴(종합 병원 -> 제네럴 호스피탈) -> 모든타입의 범용 함수
 */

//제네릭 함수 - <T> -> 타입 변수 -> 타입이 호출할떄 결정됨 
function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let str = func("gg");

let arr = func([1,2,'d']);