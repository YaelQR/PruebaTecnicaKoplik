
import type {PreguntaType, CuestionarioType, retroalimentacion} from '../types/types'
import '../styles/formulario.css'
import '../styles/feedback.css'
import { PreguntaRetro } from "./PreguntaRetro";

// Se utiliza la interfaz de retroalimentacion para especificar la estructura de las props.
export function Feedback({feedback}:{feedback:retroalimentacion[]}){
    
    // Se obtienen el número de respuestas correctas para mostrarle al usuario su resultado.
    let correctas: number = 0;
    for(let i=0; i<feedback.length; i++){
        if(feedback.at(i)?.isCorrect){
            correctas++;
        }
    }

    // Se utiliza una función map para mandar toda la información de la prop en un tipo PreguntaRetro.
    return(
       <section className="feedback">

            <h3>Tuviste una puntuación de {correctas}</h3>
            <p>A continuación checa cada pregunta y sus respuestas.</p>

            {
                feedback.map( ({id,pregunta,eleccion,correcta,isCorrect}) => {
                        return(
                            <PreguntaRetro 
                                id = {id}
                                Pregunta = {pregunta}
                                Eleccion = {eleccion}
                                RespuestaCorrecta= {correcta}
                                isCorrect = {isCorrect}
                            ></PreguntaRetro>
                        )
                    }

                )
            }

       </section>
        
    )
}