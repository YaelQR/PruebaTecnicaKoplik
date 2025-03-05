
export function Pregunta({idPregunta,numeroPregunta,nombre,respuestas}:{idPregunta:number, numeroPregunta:number, nombre:String, respuestas:String[]}){
    
    return(

        <article key={idPregunta}>

            <h1 className="titulo">{numeroPregunta}</h1>
            {
                // respuestas.map( 
                    
                // )    
            }
            
            

        </article>

    )
}