import {Pregunta} from "./Pregunta"
import type {PreguntaType, CuestionarioType, retroalimentacion} from '../types/types'
import '../styles/formulario.css'
import { useState } from "react";
import type { FormEvent } from "react";
import {Feedback} from "./Feedback"

export function Formulario({preguntas}:{preguntas:CuestionarioType}){
    
    //Estos estados permiten controlar la retroalimentación del usuario después de mandar las respuestas de su cuestionario. 
    const [responseMessage, setResponseMessage] = useState("");
    const [feedbackInfo, setfeedbackInfo] = useState<retroalimentacion[]>([]);

    // Se utilizo tipos de TypeScript relacionados con formularios para poder manejar las respuestas del usuario.
    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        
        //Se mandan al endpoint de feedback.json las respuestas del usuario con el tipo FormData.
        const response = await fetch("/api/feedback.json", {
        method: "POST",
        body: formData,
        });
        const data = await response.json();
        console.log(data.message)
        if (data.message) {
            setResponseMessage(data.message);
            setfeedbackInfo(data.message);
        }
    }

    // Función que permite reiniciar los estados para manejar la retroalimentación y por lo tanto reinicia el formulario.
    function reiniciar(){
        setResponseMessage("");
        setfeedbackInfo([]);
    }

    // Se utiliza la función map() para mandar todas las preguntas del cuestionario y ponerlas en componentes de tipo Pregunta.
    // Una posible mejora de este componente seria separar el formulario del feedback, para que se puedan reutilizar por separado en un futuro y el código sea más escalable.


    return(
        <>
            {!responseMessage && 
                <form onSubmit={submit} className="formulario" method="POST">

                    {
                        preguntas.map( ({id,question,options,correctAnswer}) => {
                                return(
                                    <Pregunta
                                        key={id}
                                        idPregunta={id}
                                        numeroPregunta={id}
                                        enunciado={question}
                                        opciones={options}
                                    >
                                    </Pregunta>
                                )
                            }
                        )
                    }
                    <input type="submit" value="Enviar Respuestas" className="boton"/>
                </form>
            }
            {responseMessage && feedbackInfo && <Feedback feedback={feedbackInfo}/>}
            {responseMessage && feedbackInfo && <button onClick={reiniciar} className="boton alinear">Reiniciar</button>}

        </>
        
    )
}