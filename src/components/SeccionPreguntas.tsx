import { BarraProgreso } from "./BarraProgreso"
import { SelectorPreguntas } from "./SelectorPreguntas"
import { Formulario } from "./Formulario"

import '../styles/seccion-Preguntas.css'
import MyComponent from "./Mycomponent"

export function SeccionPreguntas(){

    return(
        <>
            <section className="barraNavegacion">
            <BarraProgreso progreso={8} total={10}/>
            <SelectorPreguntas/>
            </section>
            <MyComponent/>
        </>
        
    )
}