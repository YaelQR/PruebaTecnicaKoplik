export type PreguntaType = {
    id: number
    question: string
    options: string[]
    correctAnswer:string
}

export type CuestionarioType = PreguntaType[];