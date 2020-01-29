import axios from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type Todos = Array<Todo>



axios.get("http://jsonplaceholder.typicode.com/todos").then(response => {

    const todos = response.data as Todos;
    todos.map(({ userId, id, title, completed }) => {
        logToDo(userId, id, title, completed)
    })


})


const logToDo = (userId: number, id: number, title: string, completed: boolean) => {
    console.log(`-------user id: ${userId}--------`)
    console.log(`id:${id}`);
    console.log(`title:${title}`);
    console.log(`completed:${completed ? "yes" : "no"}`);
    console.log(`---------------------`)
}