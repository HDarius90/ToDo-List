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

let input = prompt("What would you like to do?");
while(!input){
    input = prompt("What would you like to do?");
    if (input.toLowerCase() === "quit"){
        console.log("OK, YOU QUIT THE APP");
        break;
    }
    input = "";
}