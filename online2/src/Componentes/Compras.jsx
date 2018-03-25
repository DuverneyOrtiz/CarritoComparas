import React, {Component} from 'react';
import firebase from 'firebase';
import {Link  } from 'react-router-dom';

import NavBar from './NavBar.jsx';
class Compras extends Component{
	constructor(props){
		super(props);

		this.state={			
			data:this.props.match.params.listadoCompras
		}
		
		

	}

	editarFirebase(){
		
		let data=JSON.parse(this.state.data);

		for(let i in data){
			let id=data[i].id;
			let NInv=parseInt(data[i].CantidadIn-data[i].Cantidad, 10);
			firebase.database().ref('Producto/'+id).update({Cantidad:NInv});
		}

		alert('La compra se ha Realizado con éxito');		
		
	}

	render(){

		let datos=JSON.parse(this.props.match.params.listadoCompras);
		let Totales=0;
		return(
			<div>
				<NavBar/>				
					
							
				<div style={{marginTop: '20px'}} id="verProductos" >
					<div className="card" style={{border: '0px'}}>
							<div className="row" style={{marginBottom: '80px', padding: '20px'}}>
								<div className="col-12" style={{fontFamily: '\'PT Sans Narrow\',sans-serif', fontSize: '55px'}}>Carrito de Compras</div>

									<div className="col-6">
											{	
												
												datos.map(Producto=>{
													Totales+=Producto.Precio*Producto.Cantidad;

													
													return(
														<div className="row" key={Producto.id}>
															<div className="col-4" >
																<img src={"/productos/"+Producto.img} width="120px" alt=''/>
																<p><strong>Subtotal:{Producto.Precio*Producto.Cantidad} </strong></p>
															</div>
															<div className="col-8">
																<h3><p>{Producto.Nombre}</p></h3>
																<p><b><i>Precio:</i></b> ${Producto.Precio}</p>
																<p><b><i>Unidades:</i></b> {Producto.Cantidad}</p>
															</div>

														</div>

													)

												})
												

											}
																							
									</div>

									<div className="col-6">
										<h3><p>Total a Pagar: ${Totales}</p></h3>
										<Link to='/' className="btn btn-success" style={{marginRight:'20px'}} >Cancelar</Link>
										<Link to='/'><button className="btn btn-success" onClick={this.editarFirebase.bind(this)} >Pagar</button></Link>
												
									</div>
								</div>
						</div>									
				</div>

								
							
				
			</div>
		)
	}
}

export default Compras;