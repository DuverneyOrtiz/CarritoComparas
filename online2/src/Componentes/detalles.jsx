import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import firebase from 'firebase';

import './stylos.css';

import NavBar from './NavBar.jsx';



class Detalles extends Component{
	constructor(props){
			super(props);		

			this.state={
				Productos:[],
				ProdAuxi:[],
				AgregarCompra:[],
				msj:'Este mendaje',
				contador:0
			}


		}

	componentWillMount(){
		const nameRefe=firebase.database().ref().child('Producto');
		const {ProdAuxi}=this.state;
		const {Productos}=this.state;
		
		nameRefe.on('child_added', (snap=>{
				ProdAuxi.push({
						id: snap.key,
						Nombre:snap.val().Nombre,
						Precio:snap.val().Precio,
						Cantidad:snap.val().Cantidad,
						img:snap.val().img

					})
				 this.setState({ProdAuxi});

				Productos.push({
						id: snap.key,
						Nombre:snap.val().Nombre,
						Precio:snap.val().Precio,
						Cantidad:snap.val().Cantidad,
						img:snap.val().img

					})
				

				 this.setState({Productos});
				
			}))

		
			
	}

	
	Buscar(){
		const {ProdAuxi}=this.state;		
		ProdAuxi.length=0;

		//Averiguamos el tamaño del JSON de Productotos de la base de datos.
		let Produc=this.state.Productos;
		let string=this.textInput.value;//capturamos los el string ingresado por input
		let bool=false; //Defino si los caracteres coinciden consecutivamente
		

		for(let i in  Produc){
			let Item=Produc[i].Nombre;
			bool=true;
			for(let j in string){
				if((string[j]===Item[j] || string[j].toUpperCase()===Item[j]) && bool){
					
				}
				else{
					bool=false;
				}				
			}

			if(bool){
				ProdAuxi.push(Produc[i]);
			}
		}
		
		this.setState(ProdAuxi);
	}

	AgregarCompra(id_producto, Producto, Img, Precio, CantidadIn){
		const 	{AgregarCompra}=this.state;
		let contando=this.state.contador;
		let Cantidad=parseInt(document.getElementById(id_producto).value, 10)
		contando=contando+Cantidad;
		this.setState({contador:contando});
		document.getElementById('compras').innerHTML=contando;
		let Total=Cantidad*Precio;
		AgregarCompra.push({id:id_producto, Nombre:Producto, Precio:Precio, Cantidad:Cantidad, Total:Total, img:Img, CantidadIn:CantidadIn});
		this.setState(AgregarCompra);
	}
	render(){

		let data=JSON.stringify(this.state.AgregarCompra);
		return(
			<div>
				<NavBar mensaje={data}/>
				
				<div className="card catalogo" id="productosDiv">
					<div className="row">
						<div className="col-8 font">Catálogo de Productos</div>
						<div className="col-4 font2">
							<label>¿Qué estás Buscando?</label>
							<input type="text" className="form-control" ref={input=>{this.textInput=input;}}   placeholder="Buscar Producto" onKeyUp={this.Buscar.bind(this)} />
					    </div>
					</div>
					

					<div className="row" id="productosCata">
						{
							this.state.ProdAuxi.map(Producto=>{
									return(
									<div className="col-3" style={{padding: '0px'}} key={Producto.id}>
										<div className="card" style={{width: '100%',padding: '10px'}} >
											 <img className="card-img-top img-fluid img-thumbnail" src={"productos/"+Producto.img} height="426" alt=""/>

											 <div className="card-block">
											 	<h4 className="card-title">{Producto.Nombre}</h4>											 	
											    <p className="card-text"><strong>Precio: ${Producto.Precio}</strong></p>
											    <p className="card-text"><strong>Unidades disponibles: {Producto.Cantidad}</strong></p>
											    <div className="row">
											    	<div className="col-4"><Link to={'/articulo/'+Producto.Nombre+'/'+Producto.Precio+'/'+Producto.Cantidad+'/'+Producto.img} className="btn btn-primary" style={{fontSize: '12px'}}>Ver mas</Link></div>
											    	<div className="col-4"><button  className="btn btn-warning text-white" style={{fontSize: '12px'}} onClick={this.AgregarCompra.bind(this,Producto.id, Producto.Nombre,Producto.img, Producto.Precio, Producto.Cantidad)} >Añadir</button></div>
											    	<div className="col-4"><input className="form-control" type="number" id={Producto.id} style={{height: '30px'}} /></div>							  
											    </div>
											 </div>
											</div>
										</div>);


								})			  
						}
					</div>
				</div>
			</div>
		)
	}

}

export default Detalles;
