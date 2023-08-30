// const nameElement = document.getElementById("name").value;
// const emailElement = document.getElementById("email").value;
// const addressElement = document.getElementById("address").value;
// const telElement = document.getElementById("tel").value;
// const genderElement = document.getElementById("gender").checked;

function handleClickbtn() {
  const nameElement = document.getElementById("name").value;
  const emailElement = document.getElementById("email").value;
  const addressElement = document.getElementById("address").value;
  const telElement = document.getElementById("tel").value;
  const genderElement = document.getElementById("gender").checked;
  let studentlist = localStorage.getItem("liststuden")
    ? JSON.parse(localStorage.getItem("liststuden"))
    : [];
  studentlist.push({
    id: nameElement,
    email: emailElement,
    add: addressElement,
    tel: telElement,
    gender: genderElement,
  });
  localStorage.setItem("liststuden", JSON.stringify(studentlist));
  rennderStuden();
}
function rennderStuden() {
  let studentlist = localStorage.getItem("liststuden")
    ? JSON.parse(localStorage.getItem("liststuden"))
    : [];
  let student = `<tr>
  <th>#</th>
  <th>họ và tên</th>
  <th>email</th>
  <th>address</th>
  <th>số điện thoại</th>
  <th>giới tính</th>
  <th>action</th>
  <th></th>

</tr>`;
  studentlist.map((value, index) => {
    student += `<tr>
    <td>${index + 1}</td>
    <td>${value.id}</td>
    <td>${value.email}</td>
    <td>${value.add}</td>
    <td>${value.tel}</td>
    <td>${value.gender}</td>
    <td><button>Edit</button ><button onclick="handledelete(${index})">delete</button></td>
    <td></td>
  </tr>`;
  });
  document.getElementById("tablecontent").innerHTML = student;
}

function handledelete(index) {
  let studentlist = localStorage.getItem("liststuden")
    ? JSON.parse(localStorage.getItem("liststuden"))
    : [];
  studentlist.splice(index, 1);
  setDataFromLocalStorage("liststuden", studentlist);
  rennderStuden();
}
function handleSearch(valueSearch) {
  let studentlist = localStorage.getItem("liststuden")
    ? JSON.parse(localStorage.getItem("liststuden"))
    : [];
  const data = [];
  studentlist.forEach((id) => {
    if (studentlist.id.toLowerCase().includes(valueSearch.toLowerCase())) {
      data.push(id);
    }
  });
  rennderStuden(data);
}

function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setDataFromLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
