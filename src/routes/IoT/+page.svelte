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
                        <a href="{base}/ML" class="button-stnd mx-1 my-2 px-4">ML</a>
                        <a href="{base}/Rb" class="button-stnd mx-1 my-2 px-4">Rób</a>
                        <a href="{base}/BD" class="button-stnd mx-1 my-2 px-4">DM</a>
                        <a href="{base}/Cy" class="button-stnd mx-1 my-2 px-4">Cyb</a>
                        <a href="{base}/AI" class="button-stnd mx-1 my-2 px-4">IA</a>
                    </div>
                </div>
            </div>
            <div class="grid justify-center">
                <div class=" w-[1600px] bg-stone-300 dark:bg-zinc-800 rounded-md m-4 duration-300 transition ease-in-out delay-75 grid">
                    <div class="grid justify-around">
                        <h1 class="text-3xl text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-extrabold">Ínicio</h1>
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082004052264636426/IoT-Main.jpg" alt="hechos sobre la técnología IoT" class="float-right rounded-xl w-96 h-52">
                    </div>
                    
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué es el internet de las cosas?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082004052956680264/IoT-facts.png" alt="hechos sobre la técnología IoT" class="float-right rounded-xl">

                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">=></span><span class="font-bold text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75">Definición</span><span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-1">:</span> 
                        El internet de las cosas <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">(Internet of Things en inglés, abreviado a IoT)</span> El Internet de las cosas <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-1">(IoT)</span> se refiere a una red de dispositivos físicos que se conectan a Internet para intercambiar información y realizar tareas de manera autónoma o con intervención humana mínima. Los dispositivos IoT no solo están limitados a electrodomésticos, sino que también se utilizan en la agricultura, el monitoreo de la salud, la fabricación y la logística. Los dispositivos IoT funcionan a través de una variedad de tecnologías de conectividad y a menudo se conectan a servidores externos para compartir información y recibir actualizaciones de software.
                        
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">-></span> ej: lavadoras inteligentes, Alexa/Google Assistant/Siri…, luces inteligentes, termostatos, estaciones meteorológicas, relojes inteligentes, etc.<br>
                        Si contiene el adjetivo “inteligente”, en el contexto del ámbito del hogar, lo más probable es que esté usando este tipo de tecnología.<br>

                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Para qué se usa?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082004052583383140/IoT-industry.png" alt="hechos sobre la técnología IoT" class="float-right rounded-xl">
                        Sus usos, no solo se limitan al hogar y tareas relacionadas con este, en los últimos años, desde sectores como la agricultura, hasta empresas tecnológicas están avanzando para incorporar esta tecnología en sus procesos de producción y operaciones diarias. Por ejemplo, el monitoreo en tiempo real de maquinaria en fábricas, la recolección de datos <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">(cómo humedad y temperatura, bases de datos meteorológicas)</span> en tiempo real para tomar decisiones informadas en la agricultura, como: cómo optimizar el riego, la fertilización de cultivos, etc. y el monitoreo de signos vitales en pacientes y detectar posibles problemas de salud antes de que se conviertan en emergencias.<br>
                    </p>
                        <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué problemas supone?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        A medida que la tecnología del Internet de las cosas continúa evolucionando y expandiéndose, la privacidad y la seguridad de los datos que se recopilan y transmiten a través de estos dispositivos siguen siendo una preocupación importante. Los dispositivos IoT a menudo tienen una seguridad limitada y pueden ser vulnerables a ataques cibernéticos, como el ya mencionado ataque DDoS. Además, muchos de estos dispositivos recopilan grandes cantidades de información personal, lo que plantea preocupaciones sobre la privacidad de los datos.

                        Otro desafío importante en la implementación masiva del Internet de las cosas es la interoperabilidad de los diferentes dispositivos y sistemas. Muchos de estos dispositivos son fabricados por diferentes empresas, lo que puede hacer que la integración y la interoperabilidad sean un desafío. Además, la falta de estándares comunes para la conectividad y la comunicación entre los dispositivos IoT puede dificultar la integración de los diferentes sistemas.

                        A medida que la tecnología del Internet de las cosas sigue evolucionando, es importante abordar estas preocupaciones de privacidad y seguridad, así como trabajar en la estandarización y la interoperabilidad de los diferentes dispositivos y sistemas IoT. <br>
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-xl">
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2"> &lt; Tangente &gt;</span>
                        Pero, ¿Qué es un ataque de DDoS?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        Un ataque de DDoS <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">(Distributed Denial of Service, en inglés)</span>es un tipo de ataque informático en el que un gran número de dispositivos infectados <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">(como computadoras, teléfonos inteligentes y otros dispositivos conectados a Internet)</span>
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082004053229305907/IoT-ddos.png" alt="como funciona el ataque DDoS" class="rounded-md float-right"> se utilizan para inundar un sitio web o un servidor con tráfico de red, sobrecargando así su capacidad y haciéndolo inaccesible para los usuarios legítimos.
                        Estos ataques pueden ser realizados por delincuentes cibernéticos o grupos de hackers que buscan causar daño a una empresa o a una organización, o simplemente por individuos que buscan hacerse notar. Además de la interrupción del servicio, estos ataques pueden ser utilizados para extorsionar a las empresas, exigiendo el pago de un rescate para detener el ataque. Los dispositivos utilizados en estos ataques a menudo son vulnerables porque no han sido actualizados o no tienen una buena protección de seguridad, lo que los hace susceptibles de ser comprometidos por los atacantes. <br>
                        Cuando un ataque DDoS ocurre, el objetivo es abrumar el servidor objetivo con un tráfico de red excesivo, lo que hace que el servidor no pueda procesar las solicitudes legítimas de los usuarios y, por lo tanto, no pueda proporcionar servicios. El ataque se realiza a través de la saturación de la red del objetivo con tráfico falso, que puede provenir de una gran cantidad de dispositivos que han sido comprometidos previamente por el atacante. Estos dispositivos se convierten en "zombis" que envían solicitudes continuas al servidor de destino.

                        En algunos casos, los atacantes pueden utilizar técnicas avanzadas de DDoS, como el "reflejo amplificado", en el que los paquetes de datos enviados al servidor objetivo se amplifican a medida que se envían a través de servidores mal configurados. Esto significa que un solo dispositivo infectado puede causar una gran cantidad de tráfico dirigido al servidor objetivo, lo que lo hace aún más difícil de manejar.

                        En general, los ataques DDoS son una amenaza importante para las empresas y organizaciones que dependen de sus servicios en línea para operar. Es importante que las empresas tomen medidas para protegerse contra estos ataques, incluyendo la implementación de medidas de seguridad adecuadas, como firewalls y software de detección de intrusos, y el mantenimiento regular de sus sistemas y dispositivos para asegurarse de que están protegidos contra vulnerabilidades conocidas.
                        
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-xl">
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2"> &lt;/Tangente &gt;</span>
                    </h2>

                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        Conclusión
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        En resumen, el Internet de las cosas ha revolucionado la forma en que interactuamos con los dispositivos en nuestro hogar y en otros ámbitos de la vida. Aunque hay desafíos en torno a la privacidad y la seguridad, la tecnología continúa avanzando y tiene un gran potencial para mejorar la eficiencia y la productividad en una amplia gama de industrias.
                    </p>
            </div>
        </div>
    </div>
</div>
</div>
