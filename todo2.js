let id = 0
class Todo{
    constructor(des='N/A'){
        id++
        this.id = id
        this.des = des
    }
    getTodo(){
        return {id : this.id, des : this.des}
    }
    setDescription(newDes){
        this.des = newDes
    }
}

let todoListManaget = () => {
    let todos = []
    let addTodo = (des) => {
        todos.push(new Todo(des))
    }
    let removeTodo = (id) => {
        todos = todos.filter(x => x.id != id)
    }
    let findTodo = (id) => {
        return todos.find(x => x.id === id)
    }
    let getTodos = () => {
        return todos
    }
    return {addTodo,removeTodo,findTodo,getTodos}
}

let a = todoListManaget()
a.addTodo("do homework")
a.addTodo("do homework")
a.addTodo("do homework")
a.addTodo("do homework")
a.addTodo("do homework")
a.addTodo("do homework")
// a.removeTodo(5)
console.log(a.getTodos())
console.log(a.findTodo(2))