const ul = document.querySelector("ul");
const input = document.querySelector("input");
const buttonAddItems = document.querySelector("button");

buttonAddItems.addEventListener("click", handleAddClick);

function handleAddClick(e) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const buttonDelete = document.createElement("button");

  const inputVal = input.value;

  span.textContent = inputVal;
  ul.appendChild(li);
  li.appendChild(span);
  buttonDelete.textContent = "Delete";
  li.appendChild(buttonDelete);

  console.log("stored value = " + inputVal);
  input.value = "";

  input.focus();
  buttonDelete.addEventListener("click", () => {
    handleDeleteClick(li);
  });
  e.preventDefault();
}

function handleDeleteClick(li) {
  ul.removeChild(li);
}
