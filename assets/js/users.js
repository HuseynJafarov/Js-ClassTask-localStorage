

let datas = JSON.parse(localStorage.getItem("arr"));
console.log(datas);

let table = document.querySelector(".table");

for (const item of datas) {
    table.innerHTML += `<tr>
    <td>${item.name}</td>
  <td>${item.surname}</td>
   <td>${item.age}</td>
 </tr>`; 
}
