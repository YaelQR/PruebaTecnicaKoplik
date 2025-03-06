export type PreguntaType = {
    id: number
    question: string
    options: string[]
    correctAnswer:string
}

export type CuestionarioType = PreguntaType[];

export type respuesta = [id:string,respuesta:string];

export type respuestas = respuesta[];