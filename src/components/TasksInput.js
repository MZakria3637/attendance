import React, { Component } from 'react'

export default class TasksInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text  text-white"
                            style={{backgroundColor:'#36304A',color:"white"}} >
                                <i className="fas fa-book p-2"  />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control mx-2"
                            placeholder="New Tasks"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <button 
                        type="submit"
                        style={{backgroundColor:'#36304A',color:"white"}}
                        className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn-info'}`}
                    >
                        {editItem ? 'Edit task' : 'Add new task'}
                    </button>
                </form>
            </div>
        )
    }
}