export {};

const map1 = new Map([['country', 'Germany']]);
const map2 = new Map([['salary', 100]]);

const map3 = new Map<string, string | number>([...map1, ...map2]);

// 👇️ {'country' => 'Germany', 'salary' => 100}
console.log(map3);

// ---------------------------------------------------

// EXAMPLE 2

// const map1 = new Map<string, string>([['country', 'Germany']]);
// const map2 = new Map<string, number>([['salary', 100]]);

// const map3 = new Map<string, string | number>([...map1, ...map2]);

// // 👇️ {'country' => 'Germany', 'salary' => 100}
// console.log(map3);

// ---------------------------------------------------

// EXAMPLE 3

// const map1 = new Map<string, string>([['country', 'Germany']]);
// const map2 = new Map<string, number>([['salary', 100]]);
// const map3 = new Map<string, boolean>([['isProgrammer', true]]);

// const map4 = new Map<string, string | number | boolean>([
//   ...map1,
//   ...map2,
//   ...map3,
// ]);

// console.log(map4);
