const Inicio = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            
            <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
                
                <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
                    Inicio
                </h1>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Bienvenido a nuestra aplicación. Aquí encontrarás información
                    importante sobre nuestros servicios y funcionalidades.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Qué puedes hacer aquí?
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Explorar nuestras secciones</li>
                    <li>Registrarte como usuario</li>
                    <li>Iniciar sesión</li>
                    <li>Contactarnos para más información</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Sobre nosotros
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    Somos una plataforma diseñada para ofrecer soluciones
                    eficientes y fáciles de usar. Nuestro objetivo es brindar
                    una experiencia clara y sencilla para todos los usuarios.
                </p>

            </div>
        </div>
    );
};

export default Inicio;