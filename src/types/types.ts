// Tipos de TypeScript que permiten validar que se asigna a diferentes variables del sistema.

// Permite validar la estructura en que se deben estructurar una pregunta
export type PreguntaType = {
    id: number
    question: string
    options: string[]
    correctAnswer:string
}

// Permite validar la estructura en que se deben mandar las varias preguntas
export type CuestionarioType = PreguntaType[];

// Permite la validación de cómo se guarda una respuesta del usuario
export type respuesta = [id:string,respuesta:string];

export type respuestas = respuesta[];

// Permite la validación de cómo se debe generar una variable que contenga la retroalimentación de las preguntas del cuestionario
export interface retroalimentacion {
    id:number,
    pregunta:string,
    eleccion: string,
    correcta: string, 
    isCorrect: boolean
};
