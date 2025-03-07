# Tecnica Koplik: Aplicación Web de Preguntas y Respuestas 

Este proyecto consta de una de una Aplicación Web de preguntas y respuestas orientada a estudiantes de Medicina, para que puedan medir su conocimiento en conceptos generales de medicina.

### Pre-requisistos

Deberas instalar el software siguiente para visualizar y modificar este proyecto:
- <a href="https://docs.astro.build/en/install-and-setup/">Astro</a>
- <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">Node.js</a>
- Visual Studio Code
- Git

En el IDE Visula Studio Code deberas instalar la extensión de Astro.
Ademas deberas tener una cuenta en GitHub,

### Pasos para ejecutar el frontend y la API

Despues de tener todos los pre-requisitos completos deberas realizar lo siguiente.

1. Copia el siguiente link https://github.com/YaelQR/PruebaTecnicaKoplik .
2. Abre una terminal.
3. Dirigete a una ubicación donde quieras guardar el repositorio usando el comando `cd`.
4. Ejecuta el comando `git clone` con la url que copiaste en el paso 1.
5. Dirigete al directorio del repositorio con el comando `cd`.
6. Utiliza el comando `npm run dev` para ejecutar el codigo del proyecto.
7. Finalmente dirigite a la dirección de localhost que se te proporciona en la terminal.

### Desiciones de diseño

- La base de la aplicación web se hizo con Astro para mejorar el rendimiento.
- La parte del cuestionario se realizo con React para que pudiera ser resposivo a lo que el usuario fuera utilizando.
- En la parte del cuestionario se crearon diferentes componentes de React para que pudieran interactuar entre si.
- Primero se muestran unas pequeñas instrucciones para contestar el cuestionario.
- En lo que el usuario lee las preguntas un componente de react hace una solicitud al endpoint de GetQuestions.json para obtener las 10 preguntas que se van a mostrar en la aplicación web.
- El usuario debera contestar todas las preguntas para enviar sus respuestas.
- Una vez se manda las respuestas del usuario con el boton "Enviar Respuestas".
- Cuando se envian las respuestas se mostran todas las preguntas con las respuestas elegidas por el usuario y la correcta, resaltando las preguntas en color verde las que fueron contestadas correctamente y en rojo las que se contestaron de forma incorrecta.

### Posibles mejoras
- 

### Diseño de los endpoints
- Para el enpoint GetQuestions.json se utilizo un endopoint de tipo estatico, con una función GET que permitiera el acceso a las preguntas del cuestionario.
- Para el endpoint feedback.json se utilizo un enpoint de tipo dinamico, con una función POST para validar las respuesta del usuario y dar retroalimentación de las respuestas que se tuvieron correctas o incorrectas.

### Instrucciones para probar la Aplicación Web

1. Una vez se utilizo el comando `npm run dev`, se debera entrar a la dirección localhost que indica la terminal.
2. En el index de la aplicación web primero se encontraran unas instrucciones para contestar el cuestionario.
3. Una vez se contesten todas las preguntas, al final de la página web se encontrara un boton con el texto "Enviar Respuesta", debera click sobre este boton.
4. Despues de mandar sus respuestas del cuestionario se mostrara en la página web la retroalimentación de sus respuestas.
5. Para intentar de nuevo podra utilizar el boton de "Reiniciar", para restablecer el cuestionario y contestarlo nuevamente.

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
<h3>Yael Quintanilla Ramirez</h3>

