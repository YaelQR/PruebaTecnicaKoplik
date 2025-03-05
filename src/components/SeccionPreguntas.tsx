import { BarraProgreso } from "./BarraProgreso"
import { SelectorPreguntas } from "./SelectorPreguntas"

import '../styles/seccion-Preguntas.css'

export function SeccionPreguntas(){

    return(
        <section className="barraNavegacion">
            
            <BarraProgreso progreso={8} total={10}/>
            <SelectorPreguntas/>

        </section>
    )
}