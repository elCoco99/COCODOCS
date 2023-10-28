import '../styles/contenido.css'

const Contenido = params => {
  return (
    <>
    <div className='principal'>
          <h1 className='p-title'>{params.title}</h1>
          <div className='row'>
            <div className='contenido'>
              <h2>Titulo del contenido (variable)</h2>
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
    </>
  )
}

export default Contenido