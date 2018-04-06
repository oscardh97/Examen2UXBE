import React, { Component } from 'react'
import axios from 'axios'
import Clima from './Clima'
import ClimaForm from './ClimaForm'
import { Button, Modal } from 'reactstrap';

class ClimasContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			climas: []
		}
	}

	componentDidMount() {
		this.getReporte()
	}

	getReporte = () => {
		axios.get('http://localhost:3001/api/v1/climas.json')
		.then(response => {
			this.setState({
				climas: response.data
			});
		})
		.catch(error => console.log(error))
	}

	openForm = () => {
   		this.child.toggle()
	}
	render() {
		return (
			<div>
		        <ClimaForm 
		          ref = {(form) => {this.child = form}}
		          updateParent = {this.getReporte}
		        />
				<Button onClick={this.openForm}>
				  Agregar Clima
				</Button>
				{this.state.climas.map((clima) => {
					return(<Clima clima={clima} key={clima.id} />)
				})}
			</div>
		)
	}
}

export default ClimasContainer