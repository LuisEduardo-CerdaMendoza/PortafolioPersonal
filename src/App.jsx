import { Routes, Route, NavLink } from 'react-router-dom';
import Index from './routes/Index';
import Python from './routes/Python';
import HTML from './routes/HTML';
import JavaScript from './routes/JavaScript';
import Kotlin from './routes/Kotlin';
import './styles.css'; // Importa la hoja de estilo
import Archivos from './routes/Archivos';
import Cmasmas from './routes/Cmasmas';

const App = () => {
  return (
    <div className="">
      <nav>
        <div className="nav-header">
          <img 
            src="https://avatars.githubusercontent.com/u/154579730?v=4" 
            alt="Avatar" 
            className="nav-icon" 
          />
          <p className='nav-text'>Luis Eduardo Cerda Mendoza</p>
        </div>
        <NavLink to="/" activeClassName="active"> 💻 Inicio</NavLink>
        <p> | </p>
        <NavLink to="/python" activeClassName="active">🟦 Python</NavLink>
        <p> | </p>
        <NavLink to="/html" activeClassName="active">🟧 HTML</NavLink>
        <p> | </p>
        <NavLink to="/javascript" activeClassName="active">🟨 JavaScript</NavLink>
        <p> | </p>
        <NavLink to="/kotlin" activeClassName="active">🟪 Kotlin</NavLink>
        <p> | </p>
        <NavLink to="/C++" activeClassName="active">🟫 C++</NavLink>
        <p> | </p>
        <NavLink to="/Archivos" activeClassName="active">🟩 Archivos</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/python" element={<Python />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/kotlin" element={<Kotlin />} />
        <Route path="/C++" element={<Cmasmas />} />
        <Route path='/Archivos' element={<Archivos />} />
      </Routes>
    </div>
  );
};

export default App;
