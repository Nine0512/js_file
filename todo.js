let todo = () => {
    let id = 0
    class Todo {
        constructor(description) {
            id++
            this.id = id
            this.description = description
        }

        getTodo() {
            return {id: this.id, description: this.description}
        }

        setDescription(des) {
            return this.description = des
        }

    }

    let todos = []

    let addTodo = (des) => {
        todos.push(new Todo(des))
    }

    let removeTodo = (id) => todos = todos.filter(x => x.id !== id)

    let findTodo = (id) => {
        return todos.find(x => x.id == id)
    }
    let getTodos = () => console.log(todos)
    return {
        addTodo,
        removeTodo,
        findTodo,
        getTodos,
    }
}
let a = todo()
a.addTodo("Do Homework")
a.addTodo("Do hi")
a.addTodo("Do Homework")
a.addTodo("Do hi")
a.addTodo("Do Homework")
a.addTodo("Do hi")
a.removeTodo(1)
console.log(a.findTodo(5))
a.getTodos()