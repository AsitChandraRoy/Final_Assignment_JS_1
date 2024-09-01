const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

let editTodo = null;

// add to do Function
const addTodo = () => {
  const inputText = inputBox?.value.trim();
  if (inputText.length <= 0) {
    alert("input a task");

    return 0;
  }

  if (addBtn?.value === "Edit") {
    editTodo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    // creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.setAttribute("class", "flex-grow text-start");
    li.setAttribute(
      "class",
      "border w-96 mx-auto flex justify-between items-center py-2 px-2 rounded-md bg-[#ffffff]"
    );
    p.innerHTML = inputText;
    li.appendChild(p);

    // creating edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    li.appendChild(editBtn);
    editBtn.setAttribute(
      "class",
      "bg-green-500 hover:bg-green-600 rounded-md px-5 py-2 me-2"
    );

    // creating delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    li.appendChild(deleteBtn);
    deleteBtn.setAttribute(
      "class",
      "bg-red-500 hover:bg-red-700 rounded-md px-3 py-2"
    );

    todoList?.appendChild(li);
    inputBox.value = "";
  }
};

// Func to update : Edit/Delete to do
const updateTodo = (e) => {
  if (e.target.innerHTML === "Delete") {
    todoList?.removeChild(e.target.parentElement);
  }

  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox?.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
};

addBtn?.addEventListener("click", addTodo);
todoList?.addEventListener("click", updateTodo);
