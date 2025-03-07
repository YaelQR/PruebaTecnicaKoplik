import '../styles/pregunta-retro.css'

export function PreguntaRetro({id,Pregunta,Eleccion,RespuestaCorrecta,isCorrect}:{id:number,Pregunta:string,Eleccion:string,RespuestaCorrecta:string,isCorrect:boolean}){

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