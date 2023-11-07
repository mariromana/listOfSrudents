import './students-list-item.css';
import {Component} from 'react'

class StudentsListItem extends Component {
    constructor(props) {
        super(props)
    }

    render () { 
        const {name, birthday, group, phone, surname} = this.props;

        return (
            <li className="list-group-item d-flex justify-content-center">
                <span className="list-group-item-label">{name}</span>
                <span className="list-group-item-label">{surname}</span>
                <span className="list-group-item-label">{birthday}</span>
                <span className="list-group-item-label">{group}</span>
                <span className="list-group-item-label">{phone}</span>
                {/* <input type="text" className="list-group-item-input" defaultValue="1000$"/> */}
           
            </li>
        )
    }
}

export default StudentsListItem;