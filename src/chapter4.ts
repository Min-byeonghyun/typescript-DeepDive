// Type Alias (타입 별칭)

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "민병현",
  nickname: "BH",
  birth: "1999.01.25",
  location: "서울시",
};

// 인덱스 시그니처  규칙이 정해진 key value 타입

type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 4102,
  UnitedState: 840,
  UnitedKingdom: 826,
};
