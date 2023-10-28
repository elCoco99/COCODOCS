import './App.css'
import Contenido from '../components/contenido'

function App() {

  return (
    <>
      <nav id='navbar'>
        <div className='logo-container'>
          <img id='imgLogo' src="./src/images/cocodocs-main.png" alt="logo" width={'60px'} />
          <h1 id='logo-title'>
            <span className='nav-logo-title'>COCODOCS</span>
          </h1>
        </div>
        <div className='list-cont'>
          <ul>
            <li>Inicio</li>
            <li>Sobre mi</li>
            <li>Proyectos</li>
            <li>Contacto</li>
          </ul>
        </div>
      </nav>
      <main>
        <div className='sidebar'>
          <h1 className="title">Tecnologías</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </div>
        <Contenido
          title='Sintaxis HTML'
        />
      </main>
    </>
  )
}

export default App
