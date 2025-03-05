import '../styles/pregunta.css'

export function Pregunta({idPregunta,numeroPregunta,enunciado,opciones}:{idPregunta:number, numeroPregunta:number, enunciado:string, opciones:string[]}){
    
    return(

        <article key={idPregunta}>

            <label className="titulo-Pregunta">{enunciado}</label>
            {
                opciones.map( opcion => {
                    return (
                        <input type="radio" key={opciones.indexOf(opcion)} name={'Pregunta'+idPregunta} value={opcion}>{opcion}</input>
                    )
                }
                )    
            }

        </article>

    )
}