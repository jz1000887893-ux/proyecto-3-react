const UseEffect = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-6">
            
            <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
                
                <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
                    useEffect
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    useEffect es un Hook de React que permite ejecutar efectos secundarios
                    dentro de los componentes funcionales.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Qué son efectos secundarios?
                </h2>

                <p className="text-gray-700 mb-4">
                    Son acciones que ocurren fuera del flujo normal del renderizado,
                    como por ejemplo:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Consumir una API</li>
                    <li>Modificar el DOM</li>
                    <li>Configurar un temporizador</li>
                    <li>Suscribirse a eventos</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Cómo funciona?
                </h2>

                <p className="text-gray-700 mb-4">
                    useEffect recibe dos parámetros:
                </p>

                <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
                    <li>Una función que contiene el efecto.</li>
                    <li>Un arreglo de dependencias.</li>
                </ol>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Tipos de ejecución
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Sin dependencias → Se ejecuta en cada render.</li>
                    <li>Con arreglo vacío [] → Se ejecuta solo una vez.</li>
                    <li>Con dependencias [variable] → Se ejecuta cuando cambia esa variable.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Importante
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    useEffect puede retornar una función de limpieza, que se ejecuta
                    cuando el componente se desmonta o antes de volver a ejecutar el efecto.
                </p>

            </div>
        </div>
    );
};

export default UseEffect;