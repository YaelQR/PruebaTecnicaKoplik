import questions from '../../data/questions.json'

export async function GET(){

    return new Response(
        JSON.stringify({
            "body": questions     
        })
    )

}