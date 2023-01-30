//use while loop
//implement quit first
//store todos in array
//use splice

//prompt - What would you like to do?
//prompt - Enter new todo
//new - console - XY added to list
//list - console - #: XY 
//delete - prompt - Enter index of todo to delete
//console - Todo Removed
//type anyithinbg else nothing heapens
//quit - console - OK, YOU QUIT THE APP
let todos = ['WRITE CODE'];
let input = prompt("What would you like to do?");
while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") {
    if (input.toLowerCase() === "new") {
        let newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to list`);
        input = prompt("What would you like to do?");

    } else if (input.toLowerCase() === "list") {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}: ${todos[i]}`);
        }
        input = prompt("What would you like to do?");

    } else if (input.toLowerCase() === "delete") {
        let indexOfDelete = prompt("Enter index of todo to delete");
        todos.splice(parseInt(indexOfDelete) - 1, 1);
        console.log("Todo Removed");
        input = prompt("What would you like to do?");

    } else {
        input = prompt("What would you like to do?");
    }
}
console.log("OK, YOU QUIT THE APP");