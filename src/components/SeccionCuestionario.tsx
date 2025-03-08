import React, { useState, useEffect } from 'react';
import type { CuestionarioType } from '../types/types';
import { Formulario } from './Formulario';

// Este componente permite conectar con el endPoint de GetQuestions.json, este endpoint permite obtener las preguntas que se mostraran en el cuestionario.
export default function SeccionCuestionario() {
  // Este estado permite esperar a que se realice la consulta al endpoint.
  const [questions, setQuestions] = useState<CuestionarioType>([]);

  // Este estado permite manejar el tiempo de espera de la solicitud al endpoint
  const [loading, setLoading] = useState<boolean>(true);

  // Este estado permite manejar errores relacionados con la consulta al endpoint.
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {

    // Se utilizo una función asincrónica para que se pudiera ejecutar otra parte del codigo en lo que se completa la petición.
    async function fetchQuestions() {

      // Se utiliza un try para manejar errores relacionados con la petición al endpoint
      try {
        
        // Se hace la petición al endpoint ubicado en la carpeta api/
        const response = await fetch('api/GetQuestions.json');

        if (!response.ok) {
          throw new Error('No se pudo obtener las preguntas');
        }

        // Se convierte la respuesta del endpoint en JSON para que se pueda guardar en una variable que es de tipo CuestionarioType(types.ts)
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
  // Se mandan las preguntas obtenidas al tipo Formulario
  return (
    <Formulario preguntas={questions} />
  );
}