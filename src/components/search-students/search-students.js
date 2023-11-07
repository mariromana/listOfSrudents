import './search-students.css';
import { Component } from 'react';


class SearchStudents extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value; 
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div className='search-panel'>
                <input type="text"
                className="form-control search-input"
                placeholder="Find student"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
            </div>
    
        )
    }
}

export default SearchStudents;