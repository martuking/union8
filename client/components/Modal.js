import React, { Component } from 'react';  
import Modal from 'react-modal';



class PreviewModal extends Component {
    constructor(props) {
		super(props);
		this.handleOpenModal=this.handleOpenModal.bind(this);
		//this.handleCloseModal=this.handleCloseModal.bind(this);
		this.state={
			showModal: false
		}
	}
	handleOpenModal(){
		console.log('showModal='+this.state.showModal);
		if(this.state.showModal==false){
			this.setState({
				showModal: true
			});
		}
		else {
			this.setState({
				showModal: false
			});
		}
	}
	/*handleCloseModal(){
		this.setState({
			showModal: false
		});
	}*/
	render(){
		return(
			<div>
				<button className="btn btn-primary" onClick={this.handleOpenModal}>Abre el modal</button>
				<Modal isOpen={this.state.showModal}>
					<h1>Soy un modal</h1>
					<button className="btn btn-primary" onClick={this.handleOpenModal}>Cierra el modal</button>
				</Modal>
			</div>
		);
	}
}

export default PreviewModal;