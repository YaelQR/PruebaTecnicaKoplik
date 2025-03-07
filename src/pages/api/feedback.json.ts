import type {APIRoute} from "astro";
import questions from '../../../public/data/questions.json'
import type { respuestas,respuesta,retroalimentacion } from "../../types/types";
import { string } from "astro:schema";

export const prerender = false;

export const POST: APIRoute = async({request}) => {
    const data = await request.formData();

    let correctas:number = 0;
    let mensaje:string = "";
    let correctAnswer: string ="";
    let isAnswered: boolean = true;
    let retro: retroalimentacion[] = [];

    if(data === null){
        console.log("nulo")
    }

    for(let res of data.entries()){
        
        if(questions.at(parseInt(res[0])-1)?.correctAnswer === null){
            console.log("undefined");
            isAnswered = false;
            break;
        }
    }
    
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

    console.log(retro);   

    return new Response(
        JSON.stringify({
            message: retro
        }),
        {status:200}
        
    )

}
