import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from '../robots';
import ErrorBoundary from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

//mapStateToProps === tell me what piece of state to listen to so i can send it out as props
const mapStateToProps = state =>{
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

//mapDispatchToProps === tell me what props to listen thAT are actions that needs to get dispatched
const mapDispatchToProps = (dispatch) =>{
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}

}
//dispatch triggers/sends the actions

class App extends Component{
	/*constructor() {
		super()
		this.state = {
			robots : [],
			//searchfield : ''
		}
	}*/

componentDidMount(){
	this.props.onRequestRobots();

	//console.log(this.props.store.getState());
	/*fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
	 		.then(users=> this.setState({ robots: users}));
	*/
	//this.setState({ robots: robots});
	
}
	/*onSearchChange = (event) => {
		this.setState({searchfield : event.target.value})
	}*/
	
	render(){
		/*const { robots, searchfield} = this.state*/
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? 
			<h1>Loading</h1> :
			(
				<div className = "tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange ={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots = {filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);