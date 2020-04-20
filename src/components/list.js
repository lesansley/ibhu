import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ListItem from './list-item'

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ''
		}
	}

	componentWillMount() {
		let items = this.props.data.content.map(item => { 
			return { uid: uuidv4(), value: item.content[0].content[0].value };
		});
		this.setState({ items });
	}

	render() {
		return (
			<div className='ul'>
			{this.state.items.map(item => {
				return(<ListItem key={item.uid} item={item.value}/>)
			})} 
    </div> 
		)
	}
} 

export default List
