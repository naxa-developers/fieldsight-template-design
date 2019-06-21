import React , {Component} from 'react';
import ToDos from '../components/ToDos';
import AddToDo from '../components/AddToDo';
import uuid from 'uuid';

class Invitation extends Component {
    state ={
        todos:[
            {
                id:uuid.v4(),
                title : 'Take out the Trash',
                completed: true,
            },
            {
                id:uuid.v4(),
                title : 'Dinner with wife',
                completed: false,
            },
            {
                id:uuid.v4(),
                title : 'Meeting with Manish',
                completed: false,
            }
        ]
    }
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed =!todo.completed
            }
            return todo;
        }) });
    }
    delTodo =(id) =>{
        this.setState({todos : [...this.state.todos.filter(todo => todo.id 
            !==id )] });
    }

    addTodo =(title) =>{
        const newTodo ={
            id:uuid.v4(),
            title,
            completed:false
        }
        this.setState({todos: [...this.state.todos , newTodo] });
    }
    render(){
        return(
            <React.Fragment>
                <main id="main-content">
                <div className="invite invite-dashboard">
                    <div className="card">
                        <div className="card-header main-card-header sub-card-header">
                            <h5>Invitation</h5>
                            <div className="dash-btn ">
                                <a href="#" className="fieldsight-btn left-icon"><i className="la la-check"></i>Accept all</a>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="invitation-title">
                                <span>You have been invited to join FieldSight. You may Accept or  Decline each invitations or Accept all the invitations as per required.</span>
                            </div>
                            <div className="normal-list">
                                <ul>
                                    <li>
                                        <p><a href="#">Santosh k</a> as <span>Project Mangager</span> invited to join the FieldSight.</p>
                                        <div className="invite-btn">
                                            <a href="#" className="accept-btn"><i className="la la-check"></i>Accept</a>
                                            <a href="#" className="reject-btn"><i className="la la-close"></i>Accept</a>
                                        </div>
                                    </li>
                                    <li>
                                        <p><a href="#">Santosh k</a> as <span>Project Mangager</span> invited to join the FieldSight.</p>
                                        <div className="invite-btn">
                                            <a href="#" className="accept-btn"><i className="la la-check"></i>Accept</a>
                                            <a href="#" className="reject-btn"><i className="la la-close"></i>Accept</a>
                                        </div>
                                    </li>
                                    <li>
                                        <p><a href="#">Santosh k</a> as <span>Project Mangager</span> invited to join the FieldSight.</p>
                                        <div className="invite-btn">
                                            <a href="#" className="accept-btn"><i className="la la-check"></i>Accept</a>
                                            <a href="#" className="reject-btn"><i className="la la-close"></i>Accept</a>
                                        </div>
                                    </li>
                                    <li>
                                        <p><a href="#">Santosh k</a> as <span>Project Mangager</span> invited to join the FieldSight.</p>
                                        <div className="invite-btn">
                                            <a href="#" className="accept-btn"><i className="la la-check"></i>Accept</a>
                                            <a href="#" className="reject-btn"><i className="la la-close"></i>Accept</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="create-organization">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec varius ligula, vehicula 
                                    porttitor metus. Donec mauris ligula, consequat eget nunc at, tristique ornare nisl. Nulla arcu tortor,
                                    viverra in fermentum at, ultrices a massa.</p>
                                    <a className="fieldsight-btn" href="#">Create Team <i className="la la-plus"></i></a>
                            </div>
                            <AddToDo addTodo ={this.addTodo}/>
                            <ToDos todos={this.state.todos}  markComplete = {this.markComplete} delTodo = {this.delTodo}/>
                        </div>
                    </div>
                </div>
                </main>
            </React.Fragment>
        )
    }
}
export default Invitation;
