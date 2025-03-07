import questions from '../../../public/data/questions.json'
import type { respuesta,respuestas } from '../../types/types'

export async function GET(){

    // console.log('Este es el JSON strinify',JSON.stringify(questions))
    // console.log('dato: ',questions.at(0)?.id)

    return new Response(
        JSON.stringify(
            questions
        )
        
    )

}
