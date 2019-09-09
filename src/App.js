import React, { Component } from 'react';
import Todos from "./Components/Todo"
import "./Components/TodoItems"
import Header from "./Components/Layouts/Header"
import Adding from "./Components/Adding"
import "./App.css"
import uuid from "uuid"
class App extends Component {
    state = { 
        todos: [
            {
                id:uuid.v4(),
                title:"hello todos",
                name:"Moses",
                currentSubject:"React Js",
                completed:"true"
            },

            {
                id:uuid.v4(),
                title:"i will rock you React",
                name:"Unkown",
                currentSubject:"React",
                completed:"false"
            },

            {
                id:uuid.v4(),
                title:"Because i have a passion for you",
                name:"Moses3",
                currentSubject:"React",
                completed:"false",
                cursor:"pointer"
            }
        ]
     }
     
    delTod = (id) =>{
     this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)]})
    }
    Adding = (title) =>{
        const newTodo = {
            id:uuid.v4(),
            title,
        }
      this.setState({todos: [...this.state.todos, newTodo]})
    }
    render() { 
        return ( 
            <div className="container">
                <Header />
                <Adding Adding={this.Adding}/>
                <Todos todos={this.state.todos}  delTod={this.delTod}/>
            </div>
         );
    }
}
 
export default App;
