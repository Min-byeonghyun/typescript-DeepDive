/**
 * Indexed Access Type
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const key = "author";

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}
function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "민병현",
    age: 28,
  },
};

const postList: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "민병현",
    age: 28,
  },
};

// tuple

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; error

type TupNum = Tup[number];
