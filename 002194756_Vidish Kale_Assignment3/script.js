
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}



var t = new Title("CONNECT WITH ME!");

//script

let inpchk = document.querySelectorAll("input[type=checkbox]");

function handleChkboxTgle(checkbox) {
  console.log(checkbox.checked);

  let Row = checkbox.parentElement.parentElement;

  console.log(Row);

  let delColmn = Row.querySelector(":nth-child(9)");
  removeAllChldNode(delColmn);

  let editColmn = Row.querySelector(":nth-child(10)");
  removeAllChldNode(editColmn);

  Row.bgColor = '';

  if (checkbox.checked) {
    Row.bgColor = 'yellow';
    delColmn.appendChild(newDelBtn(Row));
    editColmn.appendChild(newEditBtn());

  }

  submitBtnandColVisibilitytoggle();
}

function removeAllChldNode(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function defAlert(text) {
  setTimeout(() => {
    alert(text);
  }, 150);
}

function newDelBtn(tr) {
  let btn = document.createElement('input');

  btn.type = 'button';

  btn.value = 'Delete';

  btn.addEventListener('click', () => {
    tr.nextElementSibling.remove();
    tr.remove();
    submitBtnandColVisibilitytoggle();
    defAlert('record deleted successfully');
  })

  return btn;
}

function newEditBtn() {
  let btn = document.createElement('input');

  btn.type = 'button';

  btn.value = "Edit";
  btn.addEventListener('click', () => {
    const userInput = prompt("Edit the details")
    console.log(userInput);
  })

  return btn;
}

function submitBtnandColVisibilitytoggle() {
  let chkboxes = document.querySelectorAll("input[type=checkbox]");

  let checked = false;

  chkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checked = true;
      }
    })

    document.querySelector("button#button").disabled = !checked;

    const deleteAndEditRows = document.querySelectorAll("#StudentTable td:nth-child(9),#StudentTable th:nth-child(9),#StudentTable td:nth-child(10),#StudentTable th:nth-child(10)");

    deleteAndEditRows.forEach(cell => {
      cell.classList.remove("display-cell");
      if (checked) {
        cell.classList.add("display-cell");
      }
  })

  console.log(`button disability is now ${!checked}`);
}

function tglDropDwn(img) {
  const drpdwn = img.parentElement.parentElement.nextElementSibling;
  console.log(drpdwn);

  if (drpdwn.classList.contains("dropDownTextArea")) {
    drpdwn.classList.remove("dropDownTextArea");
  }
  else {
    drpdwn.classList.add("dropDownTextArea");
  }
}

function InputFunctionality(input) {
  input.addEventListener('change', () => {
    handleChkboxTgle(input);
  })

  const img = input.nextElementSibling.nextElementSibling.nextElementSibling;

  img.addEventListener('click', () => {
    tglDropDwn(img);
  })

  handleChkboxTgle(input);
}

let cln = document.querySelectorAll("#StudentTable tbody tr");
let clnRow = cln[1].cloneNode(true);
let clnDetails = cln[2].cloneNode(true);

inpchk.forEach(input => {
  InputFunctionality(input);
})

function addNewStudent() {
  console.log(`adding new student`);

  let tbody = document.querySelector("#StudentTable tbody");

  newRow = clnRow.cloneNode(true);
  newDetails = clnDetails.cloneNode(true);

  const count = document.querySelectorAll("input[type=checkbox]").length + 1;

  const rows = newRow.querySelectorAll("td");

  rows[1].innerHTML = `Student ${count}`;
  rows[2].innerHTML = `Teacher ${count}`;
  rows[6].innerHTML = getInt(count * 10000, count * 10000 + 9999);

  let checkbox = newRow.querySelector("input[type=checkbox]");
  InputFunctionality(checkbox);

  console.log(newRow);
  console.log(newDetails);

  tbody.appendChild(newRow);
  tbody.appendChild(newDetails);

  defAlert("New student added successfully");
}

let addNewButton = document.querySelector("button#add");

addNewButton.addEventListener('click', () => {
  try {
    addNewStudent();
    submitBtnandColVisibilitytoggle();
  } catch (error) {
      alert(`Unable to add student: ${error}`);
    }
})

function getInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
