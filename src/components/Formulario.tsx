import {Pregunta} from "./Pregunta"
import type {PreguntaType, CuestionarioType} from '../types/types'
import '../styles/formulario.css'

export function Formulario({preguntas}:{preguntas:CuestionarioType}){

    return(
        <form action="">

            {
                preguntas.map( ({id,question,options,correctAnswer}) => {
                        return(
                            <Pregunta
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

            <section className="botones">
                <div className="navegacion-formulario">
                    <button className="boton">Anterior</button>
                    <button className="boton">Siguiente</button>
                </div>
                <button className="boton">Enviar</button>
            </section>

        </form>
    )
}