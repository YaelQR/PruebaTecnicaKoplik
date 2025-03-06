import '../styles/pregunta.css'

export function Pregunta({idPregunta,numeroPregunta,enunciado,opciones}:{idPregunta:number, numeroPregunta:number, enunciado:string, opciones:string[]}){
    
    return(

        <article key={idPregunta} className='pregunta'>

            <label className="titulo-pregunta">{enunciado}</label>
            <section className='seccion-respuestas'>
                {
                    opciones.map( opcion => {
                        return (
                            <>
                                <input type="radio" key={'input'+opciones.indexOf(opcion)} name={String(idPregunta)} value={opcion} placeholder={opcion}></input>
                                <label htmlFor="" key={'label'+opciones.indexOf(opcion)}>{opcion}</label> <br />
                            </>
                            
                        )
                    }
                    )    
                }
            </section>

        </article>

    )
}