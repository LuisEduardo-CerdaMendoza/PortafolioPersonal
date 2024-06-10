import React from 'react'

const HTML = () => {
  return (
    <div className="contenthtml">
      <br/>
        
      <center><h1>PROYECTOS CREADOS EN HTML</h1></center>
      <center>
        <img 
          src="https://media0.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif?cid=6c09b952tii5fwki93npi29js01qzkpcpkhtqwibv4jtmnq5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" 
          alt="HTML Logo" 
          style={{ width: '200px', margin: '20px 0' }} 
        />
      </center>
      <center>
        <a href="https://github.com/LuisEduardo-CerdaMendoza?tab=repositories&q=&type=&language=html&sort=" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#A25914', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '25px' }}>
            Ir al repositorio General 🔗
          </button>
        </a>
      </center>

      <br/>
      <h3>TRANSFORMACION DE IMAGENES CON SOBEL</h3>
      <br/>
      <h4>Metodo en el cual se usa sobel para modificar la imagen de diferentes formas, matices o tonalidades</h4>
      <br/>

      <div style={{ textAlign: 'right'}}>
        <a href="https://github.com/LuisEduardo-CerdaMendoza/Transformacion-De-Imagenes-Con-Sobel" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#A25914', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '25px'}}>
            Ir al proyecto 🔗
          </button>
        </a>
      </div>        
        
    </div>
  )
}

export default HTML;
