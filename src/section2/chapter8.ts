//unknown Type

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num : number = unknownVar
  // let str : string = unknownVar
  // let bool : boolean = unknownVar
}

//Never Type

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc(); //모든타입의 서브타입이기 때문에 가능

  // let never1: never = 10; 다운X
  // let never2: never = "string"; 다운X
  // let never3: never = true;   다운X
}

// Void Type

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }
  let voidVar: void = undefined;
}

// any Type = 치트키 타입

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  anyVar = unknownVar; //any type 한정 가능 치트키타입

  undefinedVar = anyVar; // any는 자기한테 오는 다운캐스팅도되고 자기가 다운캐스팅하는것도 가능

  // neverVar = anyVar // 예외적으로 never는 안됨 공집합이기때문에 어떤 타입도 다운캐스팅 할 수 없다.
}
