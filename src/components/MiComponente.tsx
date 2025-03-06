import React, { useEffect, useState } from 'react';

type Pregunta = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
};

const MiComponente: React.FC = () => {
    const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    
    console.log("Si entra")
    useEffect(() => {
        const fetchPreguntas = async () => {
            try {
                const response = await fetch('/api/questions.json'); // Endpoint de Astro
                console.log('Respuesta del servidor: ' + response)
                if (!response.ok) {
                    throw new Error('Error al obtener las preguntas');
                }
                const data: Pregunta[] = await response.json();
                setPreguntas(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Ocurrió un error desconocido');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPreguntas();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Preguntas</h1>
            <ul>
                {preguntas.map((pregunta) => (
                    <li key={pregunta.id}>
                        <h2>{pregunta.question}</h2>
                        <ul>
                            {pregunta.options.map((opcion, index) => (
                                <li key={index}>{opcion}</li>
                            ))}
                        </ul>
                        <p>Respuesta correcta: {pregunta.correctAnswer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MiComponente;