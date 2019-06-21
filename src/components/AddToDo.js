import React , {Component} from 'react';
class AddToDo extends Component{
    state ={
        title:'',

    }
    onSubmit =(e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    onChange =(e)=> this.setState({title: e.target.value});
    render(){
        return(
            <React.Fragment>
                <form style={{display:'flex'}} onSubmit ={this.onSubmit}>
                    <input type="text" placeholder="Add to todo" 
                    name= "title"
                    value={this.state.title} 
                    onChange ={this.onChange}
                    style={{flex:'10', padding:'5px'}}/>
                    <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex:'1'}} 
                    />
                </form>
            </React.Fragment>
        )
    }
}
export default AddToDo