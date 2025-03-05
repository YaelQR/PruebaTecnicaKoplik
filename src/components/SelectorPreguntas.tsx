import { IconoPregunta } from "./IconoPregunta"
import '../styles/selectorPreguntas.css'


export function SelectorPreguntas(){
    
    return(
        <section className="selector-Preguntas">
            <IconoPregunta numeroPregunta={1} idPregunta={1} isAnswered={true}/>
            <IconoPregunta numeroPregunta={2} idPregunta={2} isAnswered={true}/>
            <IconoPregunta numeroPregunta={3} idPregunta={3} isAnswered={false}/>
            <IconoPregunta numeroPregunta={4} idPregunta={4} isAnswered={true}/>
            <IconoPregunta numeroPregunta={5} idPregunta={5} isAnswered={false}/>
            <IconoPregunta numeroPregunta={6} idPregunta={6} isAnswered={false}/>
            <IconoPregunta numeroPregunta={7} idPregunta={7} isAnswered={true}/>
            <IconoPregunta numeroPregunta={8} idPregunta={8} isAnswered={false}/>
            <IconoPregunta numeroPregunta={9} idPregunta={9} isAnswered={false}/>
            <IconoPregunta numeroPregunta={10} idPregunta={10} isAnswered={true}/>

        </section>
    )
}
