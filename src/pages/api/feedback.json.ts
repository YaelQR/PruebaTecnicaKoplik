import type {APIRoute} from "astro";
import questions from '../../../public/data/questions.json'
import type { respuestas,respuesta,retroalimentacion } from "../../types/types";

export const prerender = false;

// Es un endpoint de tipo dinámico, se utiliza la petición POST para recibir las respuestas del cuestionario.
export const POST: APIRoute = async({request}) => {
    // Se le da un formato de formData a la prop recibida
    const data = await request.formData();

    let correctas:number = 0;
    let mensaje:string = "";
    let correctAnswer: string ="";
    let isAnswered: boolean = true;
    let retro: retroalimentacion[] = [];
    
    if(!isAnswered){
        return new Response(
            JSON.stringify({
                message: "No se contestaron algunas preguntas",
            }),
            {status:400}
        )
    };

    let id:number;
    let pregunta:string="";
    let eleccion:string ="";
    let correcta:string="";
    let isCorrect:boolean;

    // Se crea un arreglo de tipos retroalimentacion
    for(let res of data.entries()){
        id = parseInt(res[0]);
        pregunta = questions.at(parseInt(res[0])-1)?.question ?? "";
        eleccion = res[1].toString();
        correcta = questions.at(parseInt(res[0])-1)?.correctAnswer ?? "";  

        if( res[1] === questions.at(parseInt(res[0])-1)?.correctAnswer ){
            correctas++;
            isCorrect = true;
        }else{
            isCorrect = false;
        }

        retro.push({
            id,
            pregunta,
            eleccion,
            correcta,
            isCorrect
        });
            
    }  

    // Se regresa el arreglo de tipo retroalimentación como JSON
    return new Response(
        JSON.stringify({
            message: retro
        }),
        {status:200}
        
    )

}
