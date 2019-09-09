import React, { Component } from 'react';
class TodoItem extends Component {
    getStyle = () =>{
      return {
          backgroundColor:"#555",
          color:"#eee",
          padding:"10px",
          borderBottom:"1px solid #f90",
      }
    }
    render() { 
        const {id, title} = this.props.todo;
        return ( 
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" value=""/> {''}
                {title}
                <button onClick ={this.props.delTod.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
         );
    }
}

const btnStyle = {
    backgroundColor:"#ff0000",
    color:"#fff",
    border:"none",
    outline:"none",
    padding:"8px 16px",
    borderRadius:"10%",
    float:"right"
}

export default TodoItem;