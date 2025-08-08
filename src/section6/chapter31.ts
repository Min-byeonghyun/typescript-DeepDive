/**
 * Mapped Type -> 맵드 타입  -> 객체타입 조작
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

//한명의 유저 정보를 불러오는 기능

function fetchUser(): User {
  return {
    id: 1,
    name: "민병현",
    age: 28,
  };
}

//한명의 유저 정보를 수정하는 기능

function updateUser(user: PartialUser) {
  // .. 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "민병현",
  age: 28,
});
