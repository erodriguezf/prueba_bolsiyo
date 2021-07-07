import React from 'react';

const Paginacion = props =>{
    return (
         
        <div className="py-3">
            <button onClick={props.PaginaAnterior} type="button" className="btn btn-info mr-1"> Anterior &larr; </button>
            <button onClick={props.PaginaSiguiente} type="button" className="btn btn-info"> Siguiente &rarr; </button>
        </div>

    )
}

export default Paginacion;
