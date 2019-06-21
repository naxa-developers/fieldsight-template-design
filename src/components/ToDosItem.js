import React, {Component} from 'react';
class ToDosItem extends Component{
    getStyle = () =>{
        return{
            textDecoration:this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render(){
        const {id, title} = this.props.todo;
        return(
             <React.Fragment>
                
                <p style={this.getStyle()}>
                    <input type="checkbox" onChange={ () =>this.props.markComplete
                    (id)}/> {''} 
                    {title}
                    <button onClick={ () => this.props.delTodo(id)} style={btnStyle}>x</button>
                </p>
             </React.Fragment>
        )
    }
}

export default ToDosItem;

const btnStyle ={
    backgroundColor:'red',
    color:'white',
    borderRadius:'50%',
    padding:'5px 10px',
    border:'none',
}