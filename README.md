# Tecnica Koplik: Aplicación Web de Preguntas y Respuestas 

Este proyecto consta de una de una Aplicación Web de preguntas y respuestas orientada a estudiantes de Medicina, para que puedan medir su conocimiento en conceptos generales de medicina.

### Tecnologías utilizadas:

- Astro
- React
- TypeScript

### Pre-requisistos

Deberás instalar el siguiente software para visualizar y modificar este proyecto:
- <a href="https://docs.astro.build/en/install-and-setup/">Astro</a>
- <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">Node.js</a>
- Visual Studio Code
- Git

En el IDE Visual Studio Code deberás instalar la extensión de Astro. Además, deberás tener una cuenta en GitHub.

### Pasos para ejecutar el frontend y la API

Después de tener todos los prerrequisitos completos, deberás realizar lo siguiente:

1. Copia el siguiente link https://github.com/YaelQR/PruebaTecnicaKoplik .
2. Abre una terminal.
3. Dirígete a una ubicación donde quieras guardar el repositorio usando el comando `cd`.
4. Ejecuta el comando `git clone` con la URL que copiaste en el paso 1.
5. Dirígete al directorio del repositorio con el comando `cd`.
6. Utiliza el comando `npm run dev` para ejecutar el código del proyecto.
7. Finalmente, dirígite a la dirección de localhost que se te proporciona en la terminal.

### Decisiones de diseño

- La base de la aplicación web se hizo con Astro para mejorar el rendimiento.
- La parte del cuestionario se realizó con React para que pudiera ser responsivo a lo que el usuario fuera utilizando.
- Se muestra todo el cuestionario completo en una página, la carga de estas preguntas es automática cuando se carga la página web.
- Las preguntas del cuestionario se obtienen mediante un endpoint de Astro, el cual es un endpoint estático.
- Es necesario que el usuario conteste todas las preguntas para poder enviar sus respuestas y recibir retroalimentación.
- Al momento en que el usuario envía las respuestas, un componente de React se conecta con un endpoint dinámico de Astro para dar retroalimentación de las respuestas.
- La retroalimentación se da en la misma página web del cuestionario, donde se muestran todas las preguntas con la opción elegida del usuario y la respuesta correcta. Además, se resaltan las preguntas en color verde las que fueron contestadas correctamente y en rojo las que se contestaron de forma incorrecta, para un fácil entendimiento.

### Diseño de los endpoints

- Para el endpoint GetQuestions.json se utilizó un endpoint de tipo estático, con una función GET que permitiera el acceso a las preguntas del cuestionario.
- Para el endpoint feedback.json se utilizó un endpoint de tipo dinámico, con una función POST para validar las respuestas del usuario y dar retroalimentación de las respuestas que se tuvieron correctas o incorrectas.

### Posibles mejoras

- Para el uso de los endpoints, se podría utilizar una base de datos para tener un banco de preguntas más extenso, de esta manera no se repetirían las mismas 10 preguntas todo el tiempo.
- Con las bases de datos, el endpoint GetQuestions.json podría obtener aleatoriamente n preguntas que el programador decida. Por lo tanto, se deberían hacer pequeños cambios para que el programador decidiera cuántas preguntas obtener.
- Las preguntas podrían tener un registro para separar las preguntas dependiendo del tema, de esta manera se podrían realizar cuestionarios más personalizados referente a un tema en particular de medicina.
- Para la presentación de las preguntas, se podrían presentar pregunta por pregunta en un tipo flashcards. De esta manera, el estudiante únicamente se podría enfocar en una sola pregunta, esta implementación se podría mejorar con una barra de progreso de cuántas preguntas ha contestado y con un selector de preguntas para poder navegar a través de las preguntas, además de contar con botones para avanzar y retroceder de pregunta.
- Se podrían agregar otro tipo de preguntas como de relación, preguntas abiertas, o preguntas con varias respuestas.
- Creación de perfiles para que los usuarios puedan guardar sus cuestionarios, para estudiarlos posteriormente.
- Dar una explicación del por qué una respuesta es correcta cuando se muestra la retroalimentación de las preguntas del usuario.

### Instrucciones para probar la Aplicación Web

1. Una vez se utilizó el comando `npm run dev`, se deberá entrar a la dirección localhost que indica la terminal.
2. En el index de la aplicación web primero se encontrarán unas instrucciones para contestar el cuestionario.
3. Una vez se contesten todas las preguntas, al final de la página web se encontrará un botón con el texto "Enviar Respuesta", deberá hacer clic sobre este botón.
4. Después de mandar sus respuestas del cuestionario, se mostrará en la página web la retroalimentación de sus respuestas.
5. Para intentar de nuevo, podrá utilizar el botón de "Reiniciar", para restablecer el cuestionario y contestarlo nuevamente.

### Estructura del proyecto

Dentro de este proyecto de Astro se encuentra la siguiente estrutura:

```text
/
├── public/
|   └── data/
|       └── questions.json
├── src/
|   ├── components/   
│   ├── layouts/
│   │   └── MainPage.astro
│   └── pages/
│   |    ├── index.astro
|   |    └── api/
|   |         ├── feedback.json.ts
|   |         └── GetQuestion.json.ts
|   ├── styles/
|   └── types/ 
└── package.json
```

## Creador
<h3>Yael Quintanilla Ramírez</h3>

