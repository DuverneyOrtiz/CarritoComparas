import React, {Component} from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

import Detalles from './Componentes/detalles.jsx';
import Compras from './Componentes/Compras.jsx';
import Detallearticulo from './Componentes/Detallearticulo.jsx';
//import Listadoproductos from './ListadoProductos/Listadoproductos.jsx';
//import Imagenampliada from './ImagenAmpliada/Imagenampliada.jsx'


export default class Rutas extends Component{

	render(){

		return(
			<BrowserRouter>
				<div>			
					<Route exact  path='/' component={Detalles} />	
					<Route exact  path='/compras/:listadoCompras' component={Compras} />
					<Route  path='/articulo/:Nombre/:Precio/:Cantidad/:Img' component={Detallearticulo} />	
				</div>
			</BrowserRouter>

			)
		
	}
}