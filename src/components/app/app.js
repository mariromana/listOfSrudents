import './app.css';
import { Component } from 'react';


import Header from '../header/header';
import AppFilter from '../app-filter/app-filter';
import SearchStudents from '../search-students/search-students';
import StudentsList from '../students-list/students-list';
import AddForm from '../add-form/add-form';




class App extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			data: [
				{name: 'Jonh', surname: 'Smith', birthday: '2002-11-07', phone: '+481144423', group: 'A', id: 1},
				{name: 'Kate', surname: 'Loss', birthday: '1999-09-09', phone: '+481249911', group: 'B', id: 2},
				{name: 'Ann', surname: 'Hethy', birthday: '2001-03-22', phone: '+481119533', group: 'C', id: 3},
				{name: 'Natalie', surname: 'Ted', birthday: '1994-10-06', phone: '+481113341', group: 'D', id: 4},
				{name: 'Jack', surname: 'Cruse', birthday: '1985-02-11', phone: '+481478811', group: 'A', id: 5},
				{name: 'Brad', surname: 'Bob', birthday: '1995-10-13', phone: '+481114322', group: 'D', id: 6},
				{name: 'Jopnny', surname: 'Washingthon', birthday: '1998-04-24', phone: '+48129473', group: 'B', id: 7},
				{name: 'Dawid', surname: 'Bin', birthday: '2003-05-25', phone: '+48999292', group: 'A', id: 8},
				{name: 'Mathew', surname: 'Green', birthday: '1993-11-19', phone: '+481119911', group: 'B', id: 9},
				{name: 'Julie', surname: 'Smith', birthday: '1997-06-25', phone: '+481000911', group: 'C', id: 10},
			],
			term: '',
			filter: 'all',
			isAciveGroup: false,
			
		}
		this.newId = 11;
		
	}






	addNewStudent = (name,surname, birthday, phone, group) => {
		const student = {
			name,
			surname,
			birthday,
			phone,
			group,
			id: this.newId++,
		}
		this.setState(({data}) => {
			const arr = [...data, student];
			return {
				data: arr
			}
		});
	}


	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		} 
		const reg = new RegExp(term, "i");

		return items.filter(elem => {
			return reg.test(elem.name) || reg.test(elem.surname) || (term == this.getAge(elem.birthday));
			// indexof возращает индекс элемента, если его нет, то -1
		})

	}




	// onChooseGroup = (group) => {
	// 	this.setState({group})
	// }

	onUpdateSearch = (term) => {
		this.setState({term})
	}
	

	getAge(dateString) {
		let today = new Date();
		let birthDate = new Date(dateString);
		let age = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		let d = today.getDay() - birthDate.getDay();
	
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		if ( age === 0 ) {
			m = 12 + m;
			if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
				m--;
			}
		}
	
		return age;
	}


	filterPost = (items,term, filter) => {
		const reg = new RegExp(term, "i");
		if (filter === 'name') {
			return items.filter(elem => {
					return reg.test(elem.name);
				 });
		} else if (filter === 'surname') {
			return items.filter(elem => reg.test(elem.surname))
		} else if (filter === 'age') {
			return items.filter(elem => {
				if (term == this.getAge(elem.birthday)){
					return elem
				} 
			}) 
		} else if (filter === 'all' && term.length > 0) {
			return items.filter(elem => {
				return reg.test(elem.name) || reg.test(elem.surname) || (term == this.getAge(elem.birthday));
				// indexof возращает индекс элемента, если его нет, то -1
			})
		
		}else if (filter === 'group') {
			return items.filter(elem => {
				return reg.test(elem.group);
			 });
		} else {
			return items;
		}


		// switch (filter) {
		// 	case 'name':
		// 		return items.filter(elem => {
		// 			return reg.test(elem.name);
		// 		});
		// 	case 'surname':
		// 		return items.filter(elem => reg.test(elem.surname));
		// 	case 'age':
		// 		return items.filter(elem => {
		// 			if (term == this.getAge(elem.birthday)){
		// 				return elem
		// 			} 
		// 		})
		// 	default:
		// 		return items;
		// }

	}
	onFilterSelect = (filter) => {
		this.setState({filter});


	}



	render() {
		const { data, term, filter } = this.state;

		const visibleData = this.filterPost(data, term, filter);

		const total = visibleData.length;

		return (
			<div className='app'>
				  <Header total={total}/>
			  <div className='search'>
				<SearchStudents onUpdateSearch={this.onUpdateSearch}/>
				<AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
			 
				</div>
			  <StudentsList data={visibleData}/>
		  	<AddForm addNewStudent={this.addNewStudent}/>
	  
			</div>
		  )
	}
}
 
export default App;