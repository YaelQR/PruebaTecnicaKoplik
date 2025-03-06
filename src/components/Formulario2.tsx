// import React, { useState } from "react";
// import { Pregunta } from "./Pregunta";
// import { BarraProgreso } from "./BarraProgreso";
// import { SelectorPreguntas } from "./SelectorPreguntas";
// import type { CuestionarioType, RespuestaType } from "../types/types";

// type FormularioProps = {
//   preguntas: CuestionarioType;
// };

// export const Formulario: React.FC<FormularioProps> = ({ preguntas }) => {
//   // Estado para almacenar las respuestas
//   const [respuestas, setRespuestas] = useState<RespuestaType>({});

//   // Estado para la pregunta actual
//   const [preguntaActual, setPreguntaActual] = useState<number>(0);

//   // Función para actualizar una respuesta
//   const handleRespuesta = (idPregunta: number, idOpcion: number) => {
//     setRespuestas((prevRespuestas) => ({
//       ...prevRespuestas,
//       [idPregunta]: idOpcion,
//     }));
//   };

//   // Calcular el progreso
//   const progreso = Object.keys(respuestas).length;
//   const total = preguntas.length;

//   // Función para cambiar la pregunta actual
//   const handleSeleccionarPregunta = (id: number) => {
//     const index = preguntas.findIndex((pregunta) => pregunta.id === id);
//     setPreguntaActual(index);
//   };

//   return (
//     <form>
//       {/* Barra de progreso */}
//       <BarraProgreso progreso={progreso} total={total} />

//       {/* Selector de preguntas */}
//       <SelectorPreguntas
//         preguntas={preguntas}
//         respuestas={respuestas}
//         onSeleccionarPregunta={handleSeleccionarPregunta}
//       />

//       {/* Pregunta actual */}
//       <Pregunta
//         key={preguntas[preguntaActual].id}
//         idPregunta={preguntas[preguntaActual].id}
//         enunciado={preguntas[preguntaActual].question}
//         opciones={preguntas[preguntaActual].options}
//         onRespuesta={(idOpcion) =>
//           handleRespuesta(preguntas[preguntaActual].id, idOpcion)
//         }
//       />

//       {/* Botones de navegación */}
//       <section className="botones">
//         <button
//           className="boton"
//           onClick={() => setPreguntaActual((prev) => Math.max(prev - 1, 0))}
//           disabled={preguntaActual === 0}
//         >
//           Anterior
//         </button>
//         <button
//           className="boton"
//           onClick={() =>
//             setPreguntaActual((prev) => Math.min(prev + 1, preguntas.length - 1))
//           }
//           disabled={preguntaActual === preguntas.length - 1}
//         >
//           Siguiente
//         </button>
//       </section>
//     </form>
//   );
// };