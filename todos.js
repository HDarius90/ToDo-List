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
let input = "";
while(!input){
    input = prompt("What would you like to do?");
    if (input.toLowerCase() === "quit"){
        console.log("OK, YOU QUIT THE APP");
        break;
    }
    if (input.toLowerCase() === "new"){
        let newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to list`);
    }
    if (input.toLowerCase() === "list"){
       for(let i = 0; i < todos.length; i++){
        console.log(`${i}: ${todos[i]}`);
       }
    }
    if (input.toLowerCase() === "delete"){
        let indexOfDelete = prompt("Enter index of todo to delete");
        todos.splice(parseInt(indexOfDelete), 1);
        console.log("Todo Removed");
    }

    input = "";
}