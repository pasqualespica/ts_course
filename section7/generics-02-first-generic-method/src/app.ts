// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

type uno = {
  name: string;
  surname: string;
};

type due = {
  name: string;
  surname2: string;
};

type tre = uno & due;

type quattro = uno | due;

const p: tre = { name: "daje", surname: "adsfaf", surname2: "efef" };
const p1: quattro = { name: "daje", surname: "adsfaf" };
