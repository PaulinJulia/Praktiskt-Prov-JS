const url = "https://jsonplaceholder.typicode.com/todos";
const todoUl = document.querySelector(".posts");

async function getData() {
  try {
    const response = await fetch(url); //async
    //Synk kod
    const data = await response.json(); //async
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function renderTodos(todoList) {
  const html = todoList
    .filter((todo) => todo.completed !== false)
    .map((todo) => `<li>${todo.title}</li>`)
    .join("");
  todoUl.innerHTML = html;
}

async function main() {
  const todoList = await getData();
  renderTodos(todoList);
}

main();
