import questions from '../../../public/data/questions.json'
import type { respuesta,respuestas } from '../../types/types'


// Se utiliza un endpoint de tipo estático, para que sea más rápido a la hora de hacer una petición a este endpoint
// Una mejora de este endpoint podría ser que seleccionara un número n de preguntas (especificado por el programador) 
// de un banco de muchas preguntas, todas las preguntas podrían ser elegidas de forma aleatoria.
export async function GET(){

    // Se manda las preguntas localizadas en el archivo questions.json de la carpeta /public/data
    return new Response(
        JSON.stringify(
            questions
        )
        
    )

}
