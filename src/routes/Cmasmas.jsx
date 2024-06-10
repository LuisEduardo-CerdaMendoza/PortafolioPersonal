import React from 'react'

function Cmasmas() {
  return (
    <div className="contentcmas">
      <br/>
        <h1>PROYECTOS CREADOS EN ARDUINO</h1>
            <br/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '20px 0' }}>
        <img 
          src="https://media0.giphy.com/media/a7Ik5hjrFQuxiPKFZO/giphy.gif?cid=6c09b952rfn4jwd5ibo2b339n1q25b6q7sz2wveu4qqolub8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" 
          alt="Arduino Logo" 
          style={{ width: '250px' }} 
        />
      </div>
      <center>
        <a href="https://github.com/LuisEduardo-CerdaMendoza?tab=repositories&q=&type=&language=c%2B%2B&sort=" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#6B5012', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '50px' }}>
            Ir al repositorio General 🔗
          </button>
        </a>
      </center>

            <br/>
        <h3>PROGRAMA DE LA CANCION DE MARIO BROS CON ARDUINO</h3>
        <br/>
        <h4>Aplicacion creada en arduino que reproduce la cancion de mario bros</h4>
        <br/>

        <div style={{ textAlign: 'right'}}>
        <a href="https://github.com/LuisEduardo-CerdaMendoza/CancionDeMarioBros" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#6B5012', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '50px' }}>
            Ir al proyecto 🔗
          </button>
        </a>
        </div>

        <br/>
        <br/>

        <h3>PROGRAMA PARA ENCENDER UNA LICUADORA</h3>
        <br/>
        <h4>Aplicacion Creada en arduino para encender una Licuadora con un relay de 5 volts</h4>
        <br/>

        <div style={{ textAlign: 'right'}}>
        <a href="https://github.com/LuisEduardo-CerdaMendoza/LICUADORA" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#6B5012', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '50px' }}>
            Ir al proyecto 🔗
          </button>
        </a>
        </div>

        <br/>
        <br/>

        <h3>PROGRAMA DE SENSOR DE MOVIMIENTO</h3>
        <br/>
        <h4>Aplicacion Creada con Arduino que simula un sensor de movimiento</h4>
        <br/>

        <div style={{ textAlign: 'right'}}>
        <a href="https://github.com/LuisEduardo-CerdaMendoza/SensorDeMovimiento" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#6B5012', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '50px' }}>
            Ir al proyecto 🔗
          </button>
        </a>
        </div>

        <br/>
        <br/>

    </div>
  )
}

export default Cmasmas
