import {Pregunta} from "./Pregunta"
import type {PreguntaType, CuestionarioType} from '../types/types'
import '../styles/formulario.css'
import React, { useState, useEffect } from 'react';
import { BarraProgreso } from '../components/BarraProgreso';
import {SelectorPreguntas} from '../components/SelectorPreguntas';

export function Formulario({preguntas}:{preguntas:CuestionarioType}){

    // const [respuestas, setRespuestas]:[respuestas:number[], setRespuestas:Function] = useState([])
    // const [preguntaActual,setPreguntaActual] = useState(0)

    // function sumarRespuesta(){
    //     setRespuestas(respuestas.push(1))
    //     console.log(respuestas.length)
    // }

    // console.log(respuestas.length)

    return(
        <>
            {/* <BarraProgreso progreso={respuestas.length} total={preguntas.length}></BarraProgreso>
            <SelectorPreguntas></SelectorPreguntas> */}
            <form action="api/GetQuestions.json" className="formulario" method="POST">

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

                {/* <section className="botones">
                <div className="navegacion-formulario">
                        <button className="boton" value={"Anterior"} onClick={()=>sumarRespuesta()}>Anterior</button>
                        <button className="boton" value={"Siguiente"}>Siguiente</button>
                    </div>
                    <button className="boton" value={"Enviar"}>Enviar</button>
                </section> */}

                <input type="submit" value="Verificar Respuestas" />

            </form>
        </>
        
    )
}