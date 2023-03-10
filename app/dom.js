import { editUser, addUser, deletUSer } from "./api.js";
let add = document.querySelector(".add");
let tbody = document.querySelector(".tbody");
let addForm = document.querySelector(".addForm");
let editForm = document.querySelector(".EditForm");
let InfoForm = document.querySelector(".InfoForm");
let idx = null;

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// modal edit open
// Get the modal
var modalEdit = document.getElementById("myModalEdit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeEdit")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalEdit.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalEdit) {
    modalEdit.style.display = "none";
  }
};
// modal info open
// Get the modal
var modalInfo = document.getElementById("myModalInfo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeInfo")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalInfo.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalInfo) {
    modalInfo.style.display = "none";
  }
};
// onclick add open modal
add.onclick = () => {
  modal.style.display = "block";
};
// add form onsubmit
addForm.onsubmit = (e) => {
  e.preventDefault();
  const target = e.target;
  let user = {
    name: target["name"].value,
    age: target["age"].value,
    phone: target["Phone"].value,
    course: target["Course"].value,
  };
  addForm.reset();
  modal.style.display = "none";
  addUser(user);
};
//render
export default function render(data) {
  tbody.innerHTML = "";
  data.forEach((elem) => {
    let trTbody = document.createElement("tr");

    let tdId = document.createElement("td");
    tdId.innerHTML = elem.id;

    let tdName = document.createElement("td");
    tdName.innerHTML = elem.name;

    let tdAge = document.createElement("td");
    tdAge.innerHTML = elem.age;

    let tdPhone = document.createElement("td");
    tdPhone.innerHTML = elem.phone;

    let tdCourse = document.createElement("td");
    tdCourse.innerHTML = elem.course;

    let tdActions = document.createElement("td");
    let btnDelete = document.createElement("button");
    let btnDeleteImg = document.createElement("img");
    btnDeleteImg.src = "../icons/delete_FILL0_wght400_GRAD0_opsz48.svg";
    btnDelete.classList.add("btnDelete");

    btnDelete.onclick = () => {
      deletUSer(elem.id);
    };
    btnDelete.appendChild(btnDeleteImg);

    let btnEdit = document.createElement("button");
    let btnEditImg = document.createElement("img");
    btnEditImg.src = "../icons/edit_FILL0_wght400_GRAD0_opsz48.svg";
    btnEdit.classList.add("btnEdit");
    btnEdit.onclick = () => {
      idx = elem.id;
      editForm["name"].value = elem.name;
      editForm["age"].value = elem.age;
      editForm["Phone"].value = elem.phone;
      editForm["Course"].value = elem.course;
      modalEdit.style.display = "block";
      editForm.onsubmit = (e) => {
        e.preventDefault();
        const target = e.target;
        elem.name = target["name"].value;
        elem.age = target["age"].value;
        elem.phone = target["Phone"].value;
        elem.course = target["Course"].value;
        let { id, ...other } = elem;
        modalEdit.style.display = "none";
        editUser(other);
      };
    };
    btnEdit.appendChild(btnEditImg);

    let btnInfo = document.createElement("button");
    let infoImg = document.createElement("img");
    infoImg.src = "../icons/analytics_FILL0_wght400_GRAD0_opsz48.svg";
    btnInfo.classList.add("btnInfo");
    btnInfo.onclick = () => {
      modalInfo.style.display = "block";
      InfoForm["name"].value = elem.name;
      InfoForm["age"].value = elem.age;
      InfoForm["Phone"].value = elem.phone;
      InfoForm["Course"].value = elem.course;
    };
    btnInfo.appendChild(infoImg);

    tdActions.appendChild(btnDelete);
    tdActions.appendChild(btnEdit);
    tdActions.appendChild(btnInfo);
    trTbody.appendChild(tdId);
    trTbody.appendChild(tdName);
    trTbody.appendChild(tdAge);
    trTbody.appendChild(tdPhone);
    trTbody.appendChild(tdCourse);
    trTbody.appendChild(tdActions);
    tbody.appendChild(trTbody);
  });
}

export { idx };
