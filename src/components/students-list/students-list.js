
import './students-list.css';
import StudentsListItem from '../students-list-item/students-list-item';


const StudentsList = ({data}) => {


    const elements = data.map(elem => {
        const {id, ...elemProps} = elem;
        return (
            <StudentsListItem
            key={id} {...elemProps}/>
        )
    })

    return (
        <ul className="students-list list-group">
            <h3>Students</h3>
            {elements}
        </ul>
    )
}

export default StudentsList;