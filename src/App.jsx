import './App.css'

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
        <div className='principal'>
          <h1 className='p-title'>Titulo del contenido</h1>
          <div className='row'>
            <div className='contenido'>
              <h1>Titulo del contenido (variable)</h1>
              <p>elementos del contenido, descripcion, tal</p>
              <ul>
                <li>caracteristicas 1</li>
                <li>caracteristicas 2</li>
                <li>caracteristicas 3</li>
                <li>caracteristicas 4</li>
                <li>caracteristicas 5</li>
              </ul>
              <code>codigo chulito<br/>
                asd <br/>
                asdf <br/>
                asdf <br/>
                asdf <br/> 

              </code>
            </div>
            <div className='indice'>
              <h1>Indice</h1>
              <ul>
                <li>parte 1</li>
                <li>parte 2</li>
                <li>parte 3</li>
                <li>parte 4</li>
                <li>parte 5</li>
                <li>parte 6</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
