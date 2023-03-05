<script>
    let DarkMode = ''
    function DarkModeSwitcher (){
      DarkMode = (DarkMode === '') ? 'dark' : '';
    }
    import { base } from '$app/paths'
</script>
<div class="{DarkMode}">
    <div class=" w-screen m-auto bg-neutral-200 dark:bg-zinc-900 duration-300 transition ease-in-out delay-75">
        <div class=" w-screen m-auto bg-neutral-200 dark:bg-zinc-900 duration-300 transition ease-in-out delay-75">
            <div class="w-screen h-16">
                <div class="w-screen rounded-sm bg-neutral-300 dark:bg-zinc-800 mx-0.5 h-16 fixed duration-300 transition ease-in-out delay-75 grid grid-rows-2 ">
                    <div class="flex duration-300 transition ease-in-out delay-75">
                        <h1 class="drop-shadow-xl text-3xl font-sans mx-4 mb-2 text-zinc-900 dark:text-stone-400 hover:scale-105 transition ease-linear m-auto">Robótica <span class="transition ease-linear duration-150 hover:bg-lime-900 hover:text-stone-300 rounded-md"> Los Colegiales</span></h1>
                        <button class="button-stnd mx-4 my-2 inset-y-0 "on:click={DarkModeSwitcher}>Modosocuro</button>
                        <a href="{base}" class="button-stnd mx-2 my-2 px-2">Início</a>
                        <a href="{base}/IoT" class="button-stnd mx-1 my-2 px-4">IoT</a>
                        <a href="{base}/ML" class="button-stnd mx-1 my-2 px-4">ML</a>
                        <a href="{base}/Rb" class="button-stnd mx-1 my-2 px-4">Rób</a>
                        <a href="{base}/BD" class="button-stnd mx-1 my-2 px-4">DM</a>
                        <a href="{base}/AI" class="button-stnd mx-1 my-2 px-4">IA</a>
                        
                    </div>
                </div>
            </div>
            <div class="grid justify-center">
                <div class=" w-[1600px] bg-stone-300 dark:bg-zinc-800 rounded-md m-4 duration-300 transition ease-in-out delay-75 grid">
                    <div class="grid justify-around">
                        <h1 class="text-3xl text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-extrabold">Ínicio</h1>
                    </div>
                    
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué es la ciberseguridad?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">=></span><span class="font-bold text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75">Definición</span><span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-1">:</span> 
                        La ciberseguridad es el conjunto de prácticas, herramientas y procedimientos que se utilizan para proteger los dispositivos electrónicos, las redes y los sistemas informáticos de los riesgos y amenazas cibernéticas. El objetivo principal de la ciberseguridad es garantizar la confidencialidad, la integridad y la disponibilidad de los datos y la información almacenada en estos sistemas.
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">-></span> ej: Los ataques cibernéticos se han vuelto más frecuentes en los últimos años, y es por eso que la ciberseguridad es crucial en la actualidad. Algunos ejemplos de prácticas y herramientas utilizadas en la ciberseguridad incluyen:<br>       
                    </p>
                    <ul class="list-disc ">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Firewalls:</span> herramientas que se utilizan para controlar el tráfico de red y proteger las redes de intrusiones no autorizadas.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Antivirus:</span> software que se utiliza para detectar y eliminar virus y malware de los dispositivos. que se utilizan para controlar el tráfico de red y proteger las redes de intrusiones no autorizadas.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Copias de seguridad:</span> realizar copias de seguridad periódicas de la información y los datos críticos es una buena práctica de seguridad para minimizar el impacto de cualquier incidente de ciberseguridad.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Autenticación de usuarios:</span> se utilizan diversos métodos de autenticación, como contraseñas y autenticación de dos factores, para garantizar que solo los usuarios autorizados puedan acceder a los sistemas y la información.
                        </li>
                        
                    </ul>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Para qué es útil?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        La ciberseguridad es esencial en el mundo digital actual para proteger a individuos, empresas y organizaciones contra los ciberataques <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-1">(ataques maliciosos realizados por medios electrónicos)</span> . Sin ella, los datos personales y confidenciales, como los registros financieros y de salud, podrían ser robados o comprometidos, lo que puede tener graves consecuencias para la privacidad y la seguridad de las personas. Además, la ciberseguridad puede ayudar a prevenir la interrupción de los servicios críticos y la infraestructura <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-1">(como el suministro de energía eléctrica, el transporte y las comunicaciones)</span> , que son vitales para el funcionamiento de la sociedad.

                        La ciberseguridad se utiliza en una variedad de áreas, incluyendo la banca, la atención médica, las empresas de tecnología, el gobierno y las fuerzas armadas. Las organizaciones de todo tipo y tamaño pueden beneficiarse de las medidas de seguridad cibernética para proteger su información y su infraestructura.

                        Ejemplos de medidas de ciberseguridad incluyen el uso de contraseñas fuertes y seguras, la implementación de software antivirus y firewall, el cifrado de datos confidenciales, la realización de copias de seguridad regulares de los datos y la formación de los empleados en seguridad informática.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué podía pasar en caso de ser mal usada?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        La ciberseguridad se ha convertido en una preocupación creciente en la era digital actual. A medida que las empresas y los individuos se vuelven cada vez más dependientes de la tecnología y los datos, el riesgo de ciberataques aumenta significativamente. Los ataques pueden ser llevados a cabo por individuos o grupos malintencionados que buscan obtener beneficios económicos o políticos, o simplemente para causar caos y destrucción. <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">(Comunmente llamado 'Trolling')</span>

                        Los peligros de la ciberseguridad pueden tener consecuencias graves y duraderas. Por ejemplo, la eliminación de datos importantes puede hacer que una empresa pierda clientes, su reputación y su posición en el mercado. La interrupción de servicios críticos, como el suministro de energía o las comunicaciones, puede afectar a la seguridad pública y a la economía en general. Los ataques también pueden tener un impacto emocional en las víctimas, ya que pueden sentirse violados en su privacidad y seguridad.

                        La ciberseguridad es fundamental para proteger la privacidad y seguridad de individuos y organizaciones en el mundo digital actual. La implementación de medidas de seguridad adecuadas, como el cifrado de datos, la autenticación de usuarios y la monitorización constante de la red, puede ayudar a prevenir ataques y reducir el riesgo de daños. Además, la educación sobre ciberseguridad es fundamental para crear conciencia sobre los peligros de la red y fomentar una cultura de seguridad digital en la sociedad en general. En conclusión, es importante entender que la ciberseguridad es un asunto crítico que afecta a todos los usuarios de la tecnología, y que tomar medidas preventivas es fundamental para evitar los peligros que conlleva.
                    </p>
                    <ul class="list-disc ">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ataque de denegación de servicio distribuido (DDoS):</span> Se habla mas de este tema en <a href="{base}/IoT" class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500">la tangente del internet de las cosas</a>,este tipo de ataque tiene como objetivo inundar un sitio web o una red con tráfico no deseado para que los usuarios legítimos no puedan acceder a ellos.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ataque de phishing:</span>os ataques de phishing son intentos de engañar a las personas para que revelen información personal, como contraseñas o información financiera. Los atacantes suelen utilizar correos electrónicos falsos o sitios web falsos para engañar a los usuarios.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Copias de seguridad:</span> realizar copias de seguridad periódicas de la información y los datos críticos es una buena práctica de seguridad para minimizar el impacto de cualquier incidente de ciberseguridad.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ataque de malware:</span> se utilizan diversos métodos de autenticación, como contraseñas y autenticación de dos factores, para garantizar que solo los usuarios autorizados puedan acceder a los sistemas y la información.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ataque de ingeniería social:</span> en este tipo de ataque, los atacantes intentan engañar a los usuarios para que divulguen información confidencial mediante el uso de técnicas psicológicas, como la manipulación o el engaño.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ataque de fuerza bruta: </span> sen un ataque de fuerza bruta, un atacante intenta adivinar la contraseña de un usuario mediante la utilización de un programa automatizado que prueba diferentes combinaciones de contraseñas hasta que encuentra la correcta.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ataque de interceptación de datos:</span> en este tipo de ataque, los atacantes interceptan y roban datos de redes o sistemas en tránsito, como los datos transmitidos por Wi-Fi o por cable.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ataque de explotación de vulnerabilidades:</span>los atacantes pueden explotar las vulnerabilidades de los sistemas para tomar el control de ellos, robar información o causar daños.
                        </li>
                    </ul>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-xl">
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2"> &lt; Tangente &gt;</span>
                        ¿Qué es un ataque de Ransomware?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        El ransomware es un tipo de malware que se utiliza para cifrar los archivos de una computadora o dispositivo, y luego exigir un rescate <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">(o "ransom")</span> para desbloquearlos. La palabra "ransomware" proviene de la combinación de "ransom" y "software".

                        El primer ransomware conocido se llamó "AIDS Trojan" y apareció en 1989. Este malware se distribuyó en forma de disquete y se ocultó en un programa que supuestamente proporcionaba información sobre el SIDA. Desde entonces, el ransomware ha evolucionado y se ha convertido en una de las mayores amenazas de seguridad cibernética en la actualidad.
                        
                        El ransomware es tan popular porque puede ser muy rentable para los atacantes. Muchos usuarios están dispuestos a pagar grandes sumas de dinero para recuperar el acceso a sus datos importantes. Además, el ransomware es relativamente fácil de crear y distribuir, lo que significa que hay muchos grupos y organizaciones que pueden llevar a cabo ataques con éxito.
                        
                        Existen varios tipos de ransomware, cada uno con sus propias características y técnicas de cifrado. Algunos ejemplos incluyen:
                    </p>
                    <ul class="list-disc ">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ransomware de cifrado simétrico:</span> eeste tipo de ransomware utiliza una clave de cifrado única para cifrar todos los archivos de una computadora. Para desbloquear los archivos, el usuario debe pagar el rescate y recibir la clave de cifrado del atacante.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ransomware de cifrado asimétrico:</span> en este caso, se utilizan dos claves de cifrado diferentes: una clave pública para cifrar los archivos y una clave privada para descifrarlos. El atacante mantiene la clave privada y exige el rescate para proporcionarla al usuario.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500">Ransomware de pantalla de bloqueo:</span> este tipo de ransomware no cifra los archivos, pero bloquea el acceso a la computadora o dispositivo. El usuario recibe un mensaje que indica que ha violado alguna ley o normativa y se le exige que pague una multa para desbloquear la pantalla.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Ransomware móvil:</span> este tipo de ransomware está diseñado específicamente para dispositivos móviles, como teléfonos inteligentes y tabletas. Puede cifrar los archivos del dispositivo o bloquear el acceso al mismo, y suele distribuirse a través de aplicaciones maliciosas descargadas de fuentes no confiables.
                        </li>
                    </ul>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        Es importante destacar que nunca se debe pagar el rescate exigido por los atacantes, ya que esto solo fomenta este tipo de actividades delictivas y no garantiza que se recuperen los archivos cifrados. En su lugar, se recomienda tener medidas preventivas como realizar copias de seguridad periódicas y utilizar software antivirus actualizado para protegerse contra este tipo de amenaza.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-xl">
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2"> &lt;/Tangente &gt;</span>
                    </h2>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        Conclusión
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        La ciberseguridad es un conjunto de prácticas, herramientas y procedimientos que se utilizan para proteger los dispositivos electrónicos, las redes y los sistemas informáticos de los riesgos y amenazas cibernéticas. Su objetivo es garantizar la confidencialidad, integridad y disponibilidad de los datos e información almacenados en estos sistemas. La ciberseguridad es esencial en el mundo digital actual para proteger a individuos, empresas y organizaciones contra los ciberataques y prevenir la interrupción de los servicios críticos y la infraestructura. La implementación de medidas de seguridad adecuadas, como el cifrado de datos, la autenticación de usuarios y la monitorización constante de la red, puede ayudar a prevenir ataques y reducir el riesgo de daños. Además, la educación sobre ciberseguridad es fundamental para crear conciencia sobre los peligros de la red y fomentar una cultura de seguridad digital en la sociedad en general. Es importante entender que la ciberseguridad es un asunto crítico que afecta a todos los usuarios de la tecnología y que tomar medidas preventivas es fundamental para evitar los peligros que conlleva.
                    </p>

            </div>
        </div>
    </div>
</div>
</div>