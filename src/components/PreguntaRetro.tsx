import '../styles/pregunta-retro.css'

// Este componente permite mostrar la retroalimentación de cada pregunta, mostrando el enunciado, la respuesta del usuario y la respuesta correcta.
// Se creo en componente aparte para que se pudiera reutilizar en otros formularios.
// Una mejora para este componente puede ser mostrar una explicación de porque la respuesta que se pone como correcta, es la respuesta correcta.

export function PreguntaRetro({id,Pregunta,Eleccion,RespuestaCorrecta,isCorrect}:{id:number,Pregunta:string,Eleccion:string,RespuestaCorrecta:string,isCorrect:boolean}){

    // Este operador ternario permite definir si la pregunta deberá ser marcada con color verde o rojo mediante la asignación de estilos diferentes 
    const estilo:string = (isCorrect)? "pregunta isCorrect":"pregunta isnotCorrect";  
    
    return(

        <article key={id} className={estilo}>

            <h4 className='pregunta'>{Pregunta}</h4>
            <p className="retroalimentacion">
                Tu elección fue: <b>{Eleccion}</b> <br /><br />
                La respuesta correcta es: <b>{RespuestaCorrecta}</b> <br /> <br />
                {(isCorrect)? 'Tu respuesta es correcta': "Tu respuesta es incorrecta"}
            </p>

        </article>

    )
}