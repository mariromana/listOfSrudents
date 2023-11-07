import { Component } from 'react';
import './add-form.css';



class AddForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            surname: '',
            birthday: '',
            phone: '',
            group: '',

        }
        
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]:[e.target.value]
        })
    }

 

    onSubNewStudent = (e) => {
        e.preventDefault();

        if (!this.state.name || !this.state.surname || !this.state.phone || !this.state.group || !this.state.birthday) return;


       this.props.addNewStudent(this.state.name, this.state.surname, this.state.birthday, this.state.phone, this.state.group);
       this.setState({
            name: '',
            surname: '',
            birthday: '',
            phone: '',
            group: ''
       
        })
    }



    render() {
        const {name, surname, birthday, group, phone} = this.state;
        
        return (

            <div className="app-add-form">
            <h3>Add new</h3>
       
            <form onSubmit={this.onSubNewStudent}  
                className="add-form">

                    <input type="text"
                        className="form-control"
                        placeholder="What is the name?" 
                        value={name}
                        name='name'
                        onChange={this.onChangeInput}/>
                    
                    <input type="date"
                        className="form-control"
                        placeholder="Birthday"
                        value={birthday}
                        name='birthday'
                        onChange={this.onChangeInput}/>

                    <input type="text"
                        className="form-control "
                        placeholder="Group"
                        name='group' 
                        value={group}
                        onChange={this.onChangeInput}/>

                    <input type="text"
                        className="form-control"
                        placeholder="What is the surname?"
                        value={surname} 
                        name='surname'
                        onChange={this.onChangeInput}/>
                               
                    <input type="tel"
                        className="form-control"
                        placeholder="Phone"
                        name='phone'
                        value={phone}
                        onChange={this.onChangeInput}/>
          
                <button type="submit"
                        className="btn btn btn-primary">Add</button>
            </form>
        </div>
        )
    }
}

export default AddForm;