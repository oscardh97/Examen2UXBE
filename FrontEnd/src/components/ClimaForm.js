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
			// updateParent: this.props.updateParent
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	handleInput = (e) => {
	    this.setState({
	    	[e.target.name]: e.target.value
	    })
	}
	render() {
		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Agregar Clima</ModalHeader>
					<ModalBody>
						<FormGroup>
				          <Label for="ciudad">Ciudad</Label>
				          <Input type="text" name="ciudad" id="ciudad" placeholder="ciudad..." value={this.state.ciudad} onChange={this.handleInput} />
				        </FormGroup>
				        <FormGroup>
				          <Label for="temperatura">Temperatura</Label>
				          <Input type="number" name="temperatura" id="temperatura" placeholder="temperatura..." value={this.state.temperatura} onChange={this.handleInput}/>
				        </FormGroup>
				        <FormGroup>
				          <Label for="estado">Estado</Label>
				          <Input type="select" name="estado" id="estado">
				            <option>Lluvioso</option>
				            <option>Nublado</option>
				            <option>Soleado</option>
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