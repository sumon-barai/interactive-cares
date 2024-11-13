let todos = [];

// {
//   id: 1,
//   text: "text one",
//   status: "complete",
// },

// dom element
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");
const countTodo = document.getElementById("countTodo");

let myStatus = "all";

// event listener

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const isEmpty = e.target.todo.value;

  if (isEmpty === "") {
    window.alert("todo name must be one character");
    return;
  }

  addTodo(e);
  // manually dom change
  displayTodo(todoList);
  e.target.reset();
});

// functionality
function displayTodo(domElement) {
  let html = "";
  const filterTodos = filterByTodoStatus(myStatus);

  if (filterTodos.length > 0) {
    filterTodos.forEach((todo) => {
      html += `
      <div
                  class="shadow p-4 m-2 flex gap-3 cursor-pointer hover:shadow-xl relative group/item"
                >
                  <div>
                    <input
                    onclick="changeStatus(${todo.id})"
                      type="checkbox"
                      ${todo.status === "complete" && "checked=true"}
                 "click remove"     
                      class="w-4 h-4 accent-teal-500 rounded-lg cursor-pointer"
                    />
                  </div>
                  <div class="px-4">${todo.id}</div>
                  <div class="px-4" mx-4>${todo.text}</div>
                  <div
                    class="flex gap-7 text-xl absolute right-10 invisible group-hover/item:visible"
                  >
                    <i onclick="RemoveTodo(${
                      todo.id
                    })" class="fa-solid fa-trash"></i>
                  </div>
                </div>
      `;
    });
    domElement.innerHTML = html;
  } else {
    domElement.innerHTML = "<p>No todo found</p>";
  }

  countTodo.innerText = `count = ${filterTodos.length}`;
}

function addTodo(e) {
  const text = e.target.todo.value;
  const todo = {
    id: idGenerate(todos),
    text: text,
    status: "incomplete",
  };

  todos.push(todo);
}

function RemoveTodo(id) {
  const remainingTodo = todos.filter((todo) => todo.id !== id);
  todos = remainingTodo;
  displayTodo(todoList);
}

function changeStatus(id) {
  const updatedTodo = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        status: todo.status === "complete" ? "incomplete" : "complete",
      };
    }
    return todo;

    /*  if (!todo.id === id) {
      return todo;
    } else {
      return {
        ...todo,
        status: todo.status === "complete" ? "incomplete" : "complete",
      };
    } */
  });

  todos = updatedTodo; //muted in original todos
}

function sortByTodoStatus(statusText, activeElement) {
  const previousActiveElement = document.querySelector("#activeBar .active");
  myStatus = statusText;
  previousActiveElement.classList.remove("active");
  activeElement.classList.add("active");
  displayTodo(todoList);
}

function filterByTodoStatus(status) {
  if (status === "all") return todos;

  if (status === "complete") {
    return todos.filter((todo) => todo.status === "complete");
  }

  if (status === "incomplete") {
    return todos.filter((todo) => todo.status === "incomplete");
  }
}

function idGenerate(todoArray) {
  let initialId = 0;
  todoArray.forEach((todo) => {
    if (todo.id > initialId) {
      initialId = todo.id;
    }
  });

  return initialId + 1;
}

// initial todo list
displayTodo(todoList);
