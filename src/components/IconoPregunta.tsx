import { useState } from "react"
import '../styles/iconoPregunta.css'

export function IconoPregunta( {numeroPregunta, idPregunta, isAnswered}:{numeroPregunta:number, idPregunta:number, isAnswered:boolean} ){

    //let [isAnswered, setIsAnswered] = useState(false)
    const estilos = (isAnswered) ? 'IconoPregunta is-Answered': 'IconoPregunta' 

    return(
        <article className={estilos}>
            {numeroPregunta}
        </article>
    )
}