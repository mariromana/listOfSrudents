import './app-filter.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const AppFilter  = (props) => {

	const buttonsData = [
        {name: 'all', label: 'All students'},
        {name: 'surname', label: 'surname'},
        {name: 'name', label: 'name'},
		{name: 'age', label: 'age'},
		{name: 'group', label: 'group'}
    ];

	const buttons = buttonsData.map(({name, label}) => {
		const active = props.filter === name;
        const clazz = active ? 'btn-primary' : 'btn-secondary';
		 return <button type="button"
				className={`btn ${clazz}`}
				key={name}
				onClick={() => props.onFilterSelect(name)}>
					{label}
		 		</button>
	})




    return (
		<div className='app-filter'>
			{buttons}


		</div>



)
    

           
} 



export default AppFilter;


