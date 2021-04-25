import React from'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component
{
	constructor()
	{
		super();
		this.onSearch = this.onSearch.bind(this);
		this.state = {
			monsters : [],
			searchField : ''
		}
	}
	
	componentDidMount() 
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({monsters: users})})
	}

	onSearch = (e) => {
		const search = e.target.value;
		this.setState({searchField : search})
	}

	render()
    {
		const {monsters, searchField} = this.state;
		const filteredMonsters = monsters.filter(monster => (
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		))
		const searchBoxPlaceholder = 'Search Monsters'
        return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox placeholder={searchBoxPlaceholder} onSearchEvent={this.onSearch}/>
				<CardList monsters={filteredMonsters}/>
			</div>
		)
    }
}

export default App;