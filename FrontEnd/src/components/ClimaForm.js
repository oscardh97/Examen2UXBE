import axios from 'axios'
import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

class ClimaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			ciudad: this.props.ciudad,
			temperatura: this.props.temperatura,
			estado: this.props.estado,
			updateParent: this.props.updateParent
		};

		this.toggle = this.toggle.bind(this);
	}


	save = () => {
		let _self = this;

    	const clima = {
			ciudad: this.state.ciudad,
			temperatura: parseFloat(this.state.temperatura),
			estado: this.state.estado
		};
		// axios.post("http://localhost:3001/api/v1/climas",
		axios.post("https://reporte-clima-odh.herokuapp.com/api/v1/climas",
			{clima: clima}
		).then(response => {
			console.log(response)
			 // this.setState(response.data);
			 
			 if (this.state.updateParent) {
			 	this.state.updateParent();
			 }
			 if (this.state.modal){
				_self.toggle();
			 }
			 	
		}).catch(error => {
			console.log(error)
		});
	}


	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	handleInput = (e) => {
	    this.setState({
	    	[e.target.name]: e.target.value
	    });
	}
	render() {
		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Agregar Clima</ModalHeader>
					<ModalBody>
						<FormGroup>
				          <Label for="ciudad">Ciudad</Label>
				          <Input type="text" name="ciudad" id="ciudad" placeholder="Ciudad..." value={this.state.ciudad} onChange={this.handleInput} />
				        </FormGroup>
				        <FormGroup>
				          <Label for="temperatura">Temperatura</Label>
				          <Input type="number" name="temperatura" id="temperatura" placeholder="Temperatura..." value={this.state.temperatura} onChange={this.handleInput}/>
				        </FormGroup>
				        <FormGroup>
				          <Label for="estado">Estado</Label>
				          <Input value={this.state.estado} onChange={this.handleInput} type="select" name="estado" id="estado">
				            <option selected="selected">Lluvioso</option>
				            <option>Nublado</option>
				            <option>Soleado</option>
				            <option>Despejado</option>
				            <option>Nevado</option>
				          </Input>
				        </FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.save}>Guardar</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>Cerrar</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

export default ClimaForm