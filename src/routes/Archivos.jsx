import React from 'react'

function Archivos() {
    return (
        <div className="contentarchive">
        <br/>
        <center><h1>ARCHIVOS PARA PROYECTOS</h1></center>
        <br/>
        <h3>ARCHIVO PARA LA API CON DJANGO</h3>
        <br/>
        <h4>Aqui se encuentran los datasets que se necesitaran para la api de django junto con las instrucciones de donde colocarlos</h4>
        <br/>

        <div style={{ textAlign: 'right'}}>
            <a href="https://github.com/LuisEduardo-CerdaMendoza/archivos_para_api_django" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#1C6C20', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '25px'}}>
                Ir al proyecto 🔗
            </button>
            </a>
        </div>        
        
        </div>
    )
}

export default Archivos