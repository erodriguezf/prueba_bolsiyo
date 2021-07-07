import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado'

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }


  PaginaAnterior = () =>{
     //leer pagina
   let pagina = this.state.pagina;
   //sumar
   if(pagina === 1) return null;

   pagina -=1;
   //cambiar estado
   this.setState({
      pagina
   },()=> {
      this.ConsultarApi();
      
   });
}
  
  PaginaSiguiente = () =>{
  
   //leer pagina
   let pagina = this.state.pagina;
   //sumar
   pagina +=1;
   //cambiar estado
   this.setState({
      pagina
   },()=> {
      this.ConsultarApi();
      
   });
}

  ConsultarApi = () =>{
     const pagina = this.state.pagina
     const url =`https://pixabay.com/api/?key=17130713-c9ca25af1cd90794e73b3d0b5&q=${this.state.termino}&per_page=30&page=${pagina}`;
     console.log(url);
    fetch(url)
     .then(respuesta =>respuesta.json() )
     .then(resultado => this.setState({imagenes : resultado.hits}))

  }

  datosBusqueda = (termino) =>{
     this.setState({
      termino: termino,
      pagina: 1
     },()=>{
        this.ConsultarApi();
     })
  }

   render(){
      return (
         <div className="app container" style={{ border: 'none' , backgroundColor: 'yellow'}}>
            <div clasName ="jumbotron" style={{ border: 'none' , backgroundColor: 'blue'}}>
               <p clasName ="row justify-content-center">Buscar</p>
               <Buscador
                 //mensaje = "buscar"
                 datosbusqueda = {this.datosBusqueda}
               />
            </div>
             <div className="row justify-content-center">
                <Resultado
                   imagenes={this.state.imagenes}
                   PaginaAnterior={this.PaginaAnterior}
                   PaginaSiguiente={this.PaginaSiguiente}
                />
             </div>
         </div>
         );
        }
      }

export default App;
