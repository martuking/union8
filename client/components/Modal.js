import React, { Component } from 'react';  
import Modal from 'react-modal';
import ModalRow from './ModalRow';

class PreviewModal extends Component {
    constructor(props) {
		super(props);
		this.handleOpenModal=this.handleOpenModal.bind(this);
		this.state={
			showModal: false
		}
	}
	handleOpenModal(){
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
	render(){
		return(
			<div>
				<button className="btn btn-primary" onClick={this.handleOpenModal}>Abre el modal</button>
				<Modal isOpen={this.state.showModal}>
					<h1>{props.title}</h1>
						{
							props.headers.map((h)=>{
								props.data.map((d)=>{
									<ModalRow dataRecord={d} header={h} />
								})
							})
						}
					<button className="btn btn-primary" onClick={this.handleOpenModal}>Cierra el modal</button>
				</Modal>
			</div>
		);
	}
}

export default PreviewModal;