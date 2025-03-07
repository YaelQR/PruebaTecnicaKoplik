import {Pregunta} from "./Pregunta"
import type {PreguntaType, CuestionarioType, retroalimentacion} from '../types/types'
import '../styles/formulario.css'
import { useState } from "react";
import type { FormEvent } from "react";
import { BarraProgreso } from '../components/BarraProgreso';
import {SelectorPreguntas} from '../components/SelectorPreguntas';
import { PreguntaRetro } from "./PreguntaRetro";
import {Feedback} from "./Feedback"

export function Formulario({preguntas}:{preguntas:CuestionarioType}){
    
    const [responseMessage, setResponseMessage] = useState("");
    const [feedbackInfo, setfeedbackInfo] = useState<retroalimentacion[]>([]);

    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
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

    function reiniciar(){
        setResponseMessage("");
        setfeedbackInfo([]);
    }


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