import React, { Component } from 'react';
import firebase from 'firebase';

import './App.css';

import Loguin from './Loguin/Loguin.jsx';

import Rutas from './Rutas.jsx';

 const config = {
    apiKey: "AIzaSyAJ6b6pDbpSpqLqzl3wxJJXSDbFA57L5q4",
    authDomain: "tiendaonline-93494.firebaseapp.com",
    databaseURL: "https://tiendaonline-93494.firebaseio.com",
    projectId: "tiendaonline-93494",
    storageBucket: "tiendaonline-93494.appspot.com",
    messagingSenderId: "936522018935"
  };
  firebase.initializeApp(config);

class App extends Component {

  constructor(){
    super();
    this.state={
      logueado:false,
      detalleCompra:0
    }
  }

  loguin(){
    const {logueado}=this.state;
    this.setState({logueado:true});
   
  }

  logout(){
    const {logueado}=this.state;
    this.setState({logueado:false});
  }

  render() {

    if(this.state.logueado){
        return(
                <div className="fondo">
                    <div className="container">                     
                      <Rutas />
                    </div>          
                </div>
          )
    }else{
        return(
            <Loguin loguin={this.loguin.bind(this)}/>
        )
    }

  }
}

export default App;
