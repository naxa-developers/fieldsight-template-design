import React, {Component} from 'react';
import ToDosItem from './ToDosItem';
class ToDos extends Component{
    
    render(){
        return(
             this.props.todos.map((todo) =>(
                <ToDosItem key={todo.id} todo = {todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo}/>
             ))
        )
    }
}
export default ToDos;