
let User1 = {
  name: "Huseyn",
  surname: "Jafarov",
  age: 23,
};
let User2 = {
  name: "Hesen",
  surname: "Quliyev",
  age: 28,
};
let User3 = {
  name: "Eli",
  surname: "Eliyev",
  age: 25,
};

let arr = [User1, User2, User3];

localStorage.setItem("arr", JSON.stringify(arr));

let datas = JSON.parse(localStorage.getItem("arr"));

for (const item of datas) {
  console.log(item);
}
