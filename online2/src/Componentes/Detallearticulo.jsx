import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
class Detallearticulo extends Component{

	render(){
		return(
				<div>
				<NavBar/>
				<div style={{marginTop: '20px'}} id="verProductos">
					<div className="card" style={{border: '0px'}}>
						<div className="row" style={{marginBottom:'80px', padding: '20px'}}>
							<div className="col-12" style={{fontFamily: '\'PT Sans Narrow\',sans-serif', fontSize:'55px'}}>{this.props.match.params.Nombre}</div>
							
							<div className="col-6"> <img src={"/productos/"+this.props.match.params.Img} height="265" alt=""/></div>
							<div className="col-6"><h2 style={{fontFamily: '\'PT Sans Narrow\',sans-serif', fontSize:'45px'}}>Precios:{this.props.match.params.Precio} </h2><p style={{fontFamily: '\'PT Sans Narrow\',sans-serif', fontSize:'20px'}}>Unidades disponibles:{this.props.match.params.Cantidad} </p></div>
						</div>
						<div className="row" style={{padding: '20px'}}>
					    	<div className="col-12">
					    		<Link to='/'><a className="btn btn-success text-white" >atrás</a></Link>
					    	</div>
					    </div>
					</div>					
				</div>
			</div>

		)
	}
}

export default Detallearticulo;