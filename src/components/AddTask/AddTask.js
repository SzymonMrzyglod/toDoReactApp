import React, {Component} from 'react'
import './AddTask.css'
class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: new Date().toISOString().slice(0, 10),
    }
    handleChangeInput = e => {
        this.setState({
            text: e.target.value
        })
    }
    handleDate = e => {
        this.setState({
            date: e.target.value
        })
    }
    handleCheck = e => {
        this.setState({
            checked: e.target.checked
        })
    }
    handleClick = () => {
        const {text, checked, date} = this.state;
        if(text.length>2){
        const add = this.props.add(text, date, checked)
        console.log(date);
            if(add){
                this.setState({
                    text: '',
                    checked: false,
                    date: new Date().toISOString().slice(0, 10),
                })
            }  
        }else{
            console.log('Za krótko');
        }

    }
    render() { 
        const minDate = new Date().toISOString().slice(0, 10);
        let maxDate = Number(minDate.slice(0, 4)) + 1;
        maxDate = maxDate + minDate.slice(4, 10);
        return (
            <div className="form">
                <input type="text" placeholder="Dodaj zadanie..." value={this.state.text} onChange={this.handleChangeInput}/>
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheck}/>
                <label htmlFor="important">Priorytet</label><br />
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date" value={this.state.date} min={minDate} max={maxDate} onChange={this.handleDate}/><br />
                <button onClick={this.handleClick}>Dodaj</button>
            </div>
        )  
    }
}
 
export default AddTask;