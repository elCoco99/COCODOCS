import '../styles/contenido.css'

const Contenido = params => {
  return (
    <>
    <div className='principal'>
          <h1 className='p-title'>{params.title}</h1>
          <div className='row'>
            <div className='contenido'>
              <h2 id='topic-title'>Introducción a HTML</h2>
              <p>En su corazón, HTML es un lenguaje muy sencillo compuesto de elementos, que se pueden aplicar a piezas de texto para darles un significado diferente en un documento (¿Esto es un párrafo? ¿Esto es una lista con viñetas? ¿Esto es parte de una tabla?), estructura un documento en secciones lógicas (¿Tiene una cabecera? ¿Tres columnas de contenido? ¿Un menú de navegación?), e incrusta contenido como imágenes y vídeos en una página. Este módulo introducirá los dos primeros de estos, e introduce conceptos fundamentales y la sintaxis que necesitas para entender HTML.</p>
              
            <h2>Guías</h2>
            <p>Este módulo contiene los siguientes artículos, que te llevarán a través de toda la teoría básica de HTML, y te proporcionarán una amplia oportunidad de probar algunas habilidades.</p>

            </div>
            <div className='indice'>
              <h2 id='sub-t-title'>Indice</h2>
              <ul>
                <li>
                  <a href="#topic-title">Introducción</a>
                </li>
                <li>
                  <a href="#sub-t-title">Guías</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Contenido