import React, { useEffect } from 'react';

const MiComponenteReact: React.FC = () => {
    console.log('Componente renderizado'); // Verificar que el componente se ejecuta

    useEffect(() => {
        try {
            console.log('useEffect ejecutado'); // Verificar que useEffect se ejecuta
            // Tu lógica aquí
        } catch (err) {
            console.error('Error en useEffect:', err); // Capturar errores
        }
    }, []);

    return (
        <div>
            <h1>¡Hola desde un componente de React!</h1>
        </div>
    );
};

export default MiComponenteReact;