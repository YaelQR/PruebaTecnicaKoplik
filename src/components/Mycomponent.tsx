import React, { useState, useEffect } from 'react';
import type { PreguntaType,CuestionarioType } from '../types/types';
import { Formulario } from './Formulario';

function MyComponent() {
  const [questions, setQuestions] = useState<CuestionarioType>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  console.log("Se renderiza")
  useEffect(() => {
    async function fetchQuestions() {
      try {
        console.log("Se ejecuta")
        const response = await fetch('api/GetQuestions.json');
        console.log("response: ",response)
        if (!response.ok) {
          throw new Error('No se pudo obtener las preguntas');
        }
        const data: CuestionarioType = await response.json();
        setQuestions(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Un error desconocido a ocurrido.'));
        }
        setLoading(false);
      }
    }
    

    fetchQuestions();
  }, []);

  if (loading) {
    return <p>Cargando preguntas...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Formulario preguntas={questions} />
  );
}

export default MyComponent;