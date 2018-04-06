import React, { Component } from 'react'

class Clima extends Component {
	render() {
		return (
			<div className="tile" key={this.props.clima.id}>
				<h4>{this.props.clima.ciudad}</h4>
				<p>{this.props.clima.temperatura}</p>
				<p>{this.props.clima.estado}</p>
			</div>
		)
	}
}

export default Clima