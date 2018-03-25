import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './stylos.css';

class NavBar extends Component{


	salir(){
		
		window.location.href='/';
	}

	render(){
		return(
			<div>				
				<nav className="navbar navbar-light bg-light justify-content-between">
				  <a className="navbar-brand">La Bodega</a>
				  <form className="form-inline">

				 	<Link to='/'><div className="icon-menu iconos"></div></Link>
				    <div>
				         <Link to={'/compras/'+this.props.mensaje}><div className="icon-shopping-cart iconos"></div></Link>
				         <div className="compras" id="compras">0</div>
				    </div>
				     <div className="icon-logout iconos" onClick={this.salir.bind(this)}></div>  
				  </form>
				</nav>
				
							
			</div>

		)
	}
}

export default NavBar;