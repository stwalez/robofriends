import React, { Component } from 'react';
import './Hello.css';

// class Hello extends Component {
// 	render() {		
// 		return (
// 		<div className="f3 i tc">
// 			<h1>Hello World</h1>
// 			<p>Welcome to React</p>
// 			<p className='b'>{this.props.greeting}</p>
// 			<p>Started ReactJS training on {this.props.date}</p>
// 		</div>
// 		);
// 	}
// }

const Hello= (props)=>{
	return (
			<div className="f3 i tc">
				<h1>Hello World</h1>
				<p>Welcome to React</p>
				<p className='b'>{props.greeting}</p>
				<p>Started ReactJS training on {props.date}</p>
			</div>
			);	
}

export default Hello;