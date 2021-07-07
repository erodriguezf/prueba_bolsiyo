// eslint-disable-next-line
import React, {Component, createContext } from 'react';

class Buscador extends Component{

   Busquedaref = React.createRef();
   obtenerDatos = (e) =>{
     e.preventDefault();
     //tomar del input
     const termino = this.Busquedaref.current.value;
     
     //enviar al componente principal
     this.props.datosbusqueda(termino);

   }

    render(){
        return (  
            <form onSubmit={this.obtenerDatos}>
                <div className = "row">
                    <div className = "form-group col-md-8" >
                         <input ref={this.Busquedaref} type ="text" className= "form-control form-control-lg" placeholder="Buscar imagenes "/>
                    </div>
                    <div className = "form-group col-md-4" >
                         <input type ="submit" className= "btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
         );
    }
}

export default Buscador;