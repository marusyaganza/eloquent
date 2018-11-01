import React from 'react';


export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.climbBinded = this.climb.bind(this);
	}
	climb() {
		this.setState(
			{
				count: this.state.count + 1
			}
		)
	}
	render(){
		return (
			<div onClick={this.climbBinded}>
				<h1>Counting: {this.state.count}</h1>
			</div>
		)
	}
	}


