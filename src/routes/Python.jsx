import React from 'react';

const Python = () => {
  return (
    <div className="contentpython">
      <br/>
      <center><h1>PROYECTOS CREADOS EN PYTHON</h1></center>
      <center><img src="https://media1.giphy.com/media/coxQHKASG60HrHtvkt/giphy.gif?cid=6c09b9523opfnmlm9xgqadg6ijfqmqzscesq1g51x6rgmbr8&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
      alt="Python Logo" style={{ width: '300px', margin: '20px 0' }} /></center>
      <center><a href="https://github.com/LuisEduardo-CerdaMendoza?tab=repositories&q=&type=&language=python&sort=" target="_blank" rel="noopener noreferrer">
        <button style={{ backgroundColor: '#3B36E6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '25px' }}>
          Ir al repositorio General 🔗
        </button>
      </a></center>
      <br/>
      <h3>API CON DJANGO</h3>
      <br/>
      <h4>Api creada en django para visualizar la informacion de un dataset que usamos donde la informacion se ve de manera grafica o especifica que usemos</h4>
      <br/>

      <div style={{ textAlign: 'right'}}>
        <a href="https://github.com/LuisEduardo-CerdaMendoza/api_django" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#3B36E6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '25px'}}>
            Ir al proyecto 🔗
          </button>
        </a>
      </div>
      
      <br/>
      <br/>
      <h3>API DE ANDROID</h3>
      <br/>
      <h4>Api creada con el uso de un dataset de android con el fin de visuzalizar la informacion de manera grafica y diversos valores</h4>
      <br/>

      <div style={{ textAlign: 'right'}}>
        <a href="https://github.com/LuisEduardo-CerdaMendoza/api_android" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#3B36E6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '25px' }}>
            Ir al proyecto 🔗
          </button>
        </a>
      </div>
      
    </div>
  );
}

export default Python;
