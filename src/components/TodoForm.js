import React from 'react';
class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input:""
        }
    }

    handleChanges = e => {
        this.setState({
            input:e.target.value
        });
    }

    //Class Property to Clear List
    handleClick = () => {
        this.props.handleClear();
    }

        //Class property to submit form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
        this.setState({
            input:""
        })
    }

    render() {
       return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChanges} type="text" name="task" />
                    <button>New Task</button>
                </form>
                <button onClick={this.handleClick}>
                        Clear Completed
                    </button>
            </div>
        ) 
    }
    
};
export default TodoForm;