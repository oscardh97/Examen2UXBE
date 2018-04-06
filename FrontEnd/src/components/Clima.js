import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';

class Clima extends Component {
	render() {
		const colors = ["primary", "secondary", "success", "info", "warning", "danger"];
		return (
			<div>
				<Card body inverse color={colors[Math.floor(Math.random() * (colors.length - 1))]} className="climaCard">
			        <CardTitle>{this.props.clima.ciudad}</CardTitle>
			        <CardSubtitle>Temperatura: {this.props.clima.temperatura}</CardSubtitle>
			        <CardText>Estado: {this.props.clima.estado}</CardText>
			    </Card>
			</div>

		)
	}
}

export default Clima