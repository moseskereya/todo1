import React, { Component } from 'react'
class Add extends Component {
    state = {
        title:""
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.Adding(this.state.title);
        this.setState({ title: ""})
    }
    render() {
        return <form onSubmit ={this.onSubmit} style={{display:"flex"}} >
            <input type="" style={{flex:'10', padding: '5px'}}
        name="title" 
        placeholder="Add todo" 
        value={this.state.title}
        onChange={this.onChange}/>
        <input type="submit"  
        value="submit" className="btn" style={{flex: '1'}}/>
        </form>
   
    }
}

export default Add