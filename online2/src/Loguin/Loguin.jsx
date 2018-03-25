import React, {Component} from 'react';
import firebase from 'firebase';

import './Loguin.css';

class Loguin extends Component{

	constructor(props){
		super(props);
		this.state={
        Usuarios:[
          //{id:1, Usuario:'duverney@hotmail.com', Password:'880923'},
          //{id:2, Usuario:'maria@hotmail.com', Password:'1234567'}
        ]
      }		

	}
	componentWillMount(){
		const nameRefe=firebase.database().ref().child('Usuario');
		const {Usuarios}=this.state;
		nameRefe.on('child_added',(snap)=>{
			Usuarios.push({
						id: snap.key,
						Usuario:snap.val().Usuario,
						Password:snap.val().Password
					})
			 this.setState({Usuarios});
			})

		console.log(this.state.Usuarios)
	}

	loguin(e){
		e.preventDefault();

		const {Usuarios}=this.state;
	    let usuario=this.textInput.value;
	    let password=this.textPass.value;
	    let enter=false;

	    for(let i in Usuarios){
		      if(Usuarios[i].Usuario==usuario && Usuarios[i].Password==password){
		       	  enter=true;
		      }     
   		}

   		if(enter){
   			 this.props.loguin();	
   		}else{
   			alert('Uno de los datos no coincide, favor volver verifique los datos.');
   		}
			
	}

	render(){

		return(
			<div className="fondoLoguin">
	            <div className="contenedor">
	              <form   className="form">
	                <h1 className="text-center text-white">Iniciar Sesión</h1>
	                <div className="form-group">
	                  <label className="text-white">Correo Electónico:</label>
	                  <input type="text" className="form-control" name="Email" ref={input=>{this.textInput = input;}}  required/>                 
	                </div>

	                <div className="form-group">
	                  <label className="text-white">Password:</label>
	                  <input type="password" className="form-control" name="Password" ref={input=>{this.textPass = input;}} required/>
	                </div>

	                <div className="form-group text-center">
	                  <button type="submit" className="btn btn-success" onClick={this.loguin.bind(this)}>Ingresar</button>
	                </div>    
	                
	              </form>
	            </div>
	        </div>
        )
		 
	}
}

export default Loguin;