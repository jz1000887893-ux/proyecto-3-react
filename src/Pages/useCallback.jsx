const UseCallback = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-6">
            
            <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
                
                <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
                    useCallback
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    useCallback es un Hook de React que permite memorizar una función
                    para evitar que se vuelva a crear en cada renderizado del componente.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Para qué sirve?
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Evitar renderizados innecesarios.</li>
                    <li>Optimizar componentes hijos que usan React.memo.</li>
                    <li>Mejorar el rendimiento en aplicaciones grandes.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Ejemplo básico
                </h2>

                <p className="text-gray-700 mb-4">
                    useCallback recibe dos parámetros:
                </p>

                <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
                    <li>Una función.</li>
                    <li>Un arreglo de dependencias.</li>
                </ol>

                <p className="text-gray-700 mb-6">
                    La función solo se recreará cuando cambie alguna de las dependencias.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Importante
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    No siempre es necesario usar useCallback. Se recomienda cuando
                    realmente necesitas optimizar rendimiento y evitar renders innecesarios.
                </p>

            </div>
        </div>
    );
};

export default UseCallback;