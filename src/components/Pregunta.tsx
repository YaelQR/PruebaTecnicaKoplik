import '../styles/pregunta.css'

// Se decidió crear un componente que construya una pregunta y todas sus respuestas, de esta forma se puede armar pregunta por pregunta de los formularios.
// Este componente se podría reutilizar en un futuro en otros formularios.
// Una mejora las preguntas puede ser tener diferentes tipos de preguntas, para esto se deberia crear componentes de respuestas 
// que permitan cambiar unicamente la forma en como se contesta cada pregunta.

export function Pregunta({idPregunta,numeroPregunta,enunciado,opciones}:{idPregunta:number, numeroPregunta:number, enunciado:string, opciones:string[]}){
        
    return(

        <article key={idPregunta} className='pregunta'>

            <label className="titulo-pregunta">{enunciado}</label>
            <section className='seccion-respuestas'>
                {
                    opciones.map( opcion => {
                        return (
                            <>
                                <input type="radio" key={'input'+opciones.indexOf(opcion)} name={String(idPregunta)} value={opcion} placeholder={opcion} required className='opcion'></input>
                                <label htmlFor="" key={'label'+opciones.indexOf(opcion)} className='opcion'>{opcion}</label> <br />
                            </>
                            
                        )
                    }
                    )    
                }
            </section>

        </article>

    )
}