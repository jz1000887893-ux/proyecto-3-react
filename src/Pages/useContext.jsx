const UseContext = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-6">
            
            <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
                
                <h1 className="text-4xl font-bold text-purple-600 mb-6 text-center">
                    useContext
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    useContext es un Hook de React que permite acceder a datos
                    compartidos (contexto) sin necesidad de pasar props manualmente
                    a través de múltiples componentes.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Para qué sirve?
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Compartir información global (usuario, tema, idioma).</li>
                    <li>Evitar el "prop drilling".</li>
                    <li>Facilitar la gestión de estados globales simples.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Cómo funciona?
                </h2>

                <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
                    <li>Se crea un contexto con React.createContext().</li>
                    <li>Se envuelve la aplicación con un Provider.</li>
                    <li>Se usa useContext para consumir los datos.</li>
                </ol>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Ejemplo de uso
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    useContext permite acceder directamente al valor del contexto
                    desde cualquier componente que esté dentro del Provider.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Importante
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    useContext es ideal para datos globales simples. Para estados
                    más complejos, puede combinarse con useReducer.
                </p>

            </div>
        </div>
    );
};

export default UseContext;