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
                        <a href="{base}/BD" class="button-stnd mx-1 my-2 px-4">MD</a>
                        <a href="{base}/Cy" class="button-stnd mx-1 my-2 px-4">Cyb</a>
                        <a href="{base}/About" class="button-stnd mx-1 my-2 px-4 ml-auto">about</a>
                    </div>
                </div>
            </div>
            <div class="grid justify-center">
                <div class=" w-[1600px] bg-stone-300 dark:bg-zinc-800 rounded-md m-4 duration-300 transition ease-in-out delay-75 grid">
                    <div class="grid justify-around">
                        <h1 class="text-3xl text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-extrabold">Ínicio</h1>
                    </div>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué son las inteligencias artificiales?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">=></span><span class="font-bold text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75">Definición</span><span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-1">:</span> 
                        La inteligencias artificiales vienen a unir todo lo dado en los últimos puntos:
                    </p>
                    <ul class="list-disc ">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">En el contexto del Big Data,</span> la inteligencia artificial se utiliza para analizar grandes conjuntos de datos con el objetivo de identificar patrones y tendencias. Los algoritmos de aprendizaje automático (machine learning) son un tipo de inteligencia artificial que pueden analizar y aprender de los datos de manera autónoma, lo que les permite mejorar su precisión y eficiencia con el tiempo.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">En el Internet de las cosas (IoT), </span>la inteligencia artificial se utiliza para procesar grandes cantidades de datos generados por los dispositivos conectados, lo que permite a los usuarios obtener información valiosa de manera más eficiente. Por ejemplo, en un edificio inteligente, los sensores conectados pueden enviar datos a un sistema de inteligencia artificial que analiza y procesa la información para optimizar el uso de la energía y mejorar la eficiencia energética del edificio.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">En la robótica, </span>  la inteligencia artificial se utiliza para permitir a los robots realizar tareas de manera autónoma, lo que mejora la eficiencia y reduce el riesgo de errores humanos. Los robots con inteligencia artificial se utilizan en muchas aplicaciones, como la fabricación, la exploración espacial, la atención médica y la seguridad.
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">En cuanto a la ciberseguridad, </span> la inteligencia artificial se utiliza para detectar y prevenir amenazas en línea. Los sistemas de inteligencia artificial pueden analizar grandes cantidades de datos para identificar patrones y actividades sospechosas en tiempo real, lo que permite a los expertos en ciberseguridad tomar medidas para prevenir ataques y proteger los sistemas y datos críticos.

                    </ul>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        En general, la inteligencia artificial es una tecnología transformadora que tiene el potencial de mejorar significativamente muchos aspectos de la vida cotidiana y los negocios. Sin embargo, es importante abordar los riesgos y desafíos asociados con su uso para garantizar que se utilice de manera ética y segura.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Para que se usan?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">

                        Las inteligencias artificiales tienen una amplia variedad de aplicaciones en muchos campos, como la medicina, la industria manufacturera, la seguridad y la banca. En medicina, las IA se utilizan para analizar grandes cantidades de datos de pacientes para identificar patrones y desarrollar tratamientos personalizados. En la industria manufacturera, las IA pueden optimizar la producción y el mantenimiento de maquinaria. En seguridad, las IA pueden ayudar a detectar actividades sospechosas en línea y en tiempo real. En banca, las IA pueden procesar grandes volúmenes de datos financieros para identificar tendencias y riesgos potenciales.

                        Algunas de las aplicaciones específicas de la inteligencia artificial en diferentes campos incluyen:                    
                    </p>
                    <ul class="list-disc ">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Medicina:</span> análisis de imágenes médicas, diagnóstico de enfermedades, descubrimiento de fármacos y terapias personalizadas.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Industria manufacturera:</span> mantenimiento predictivo de maquinaria, control de calidad automatizado y optimización de la cadena de suministro.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Seguridad:</span> detección de fraudes, análisis de riesgos y prevención de delitos.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Banca:</span> detección de fraudes financieros, análisis de crédito y evaluación de riesgos.
                        </li>
                    </ul>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        Peligros asociados
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        Si bien la IA tiene muchas aplicaciones beneficiosas, también hay riesgos y desafíos asociados con su uso. Algunos de los riesgos asociados con la inteligencia artificial incluyen la falta de transparencia y responsabilidad en la toma de decisiones, la discriminación y el sesgo en los datos utilizados para entrenar los modelos de IA, y la posible pérdida de empleos a medida que los sistemas automatizados reemplacen a los trabajadores humanos en ciertas tareas. Además, la ciberseguridad es un tema crítico en el contexto de la IA, ya que los sistemas de IA pueden ser vulnerables a ataques y piratería. Es necesario implementar medidas de seguridad sólidas para garantizar la protección de los datos y la privacidad de los usuarios y evitar la manipulación o el mal uso de los sistemas de IA.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        Conclusión
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        En conclusión, la inteligencia artificial tiene el potencial de transformar muchos aspectos de la vida cotidiana y los negocios, pero es importante abordar los peligros y las preocupaciones éticas asociadas con su uso. La gestión adecuada y la regulación responsable de la inteligencia artificial pueden ayudar a maximizar sus beneficios y minimizar sus riesgos.
                    </p>
                    <!--
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        Texto aqui
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                       Texto aqui
                    </p>
                    <img src="static/images/ML/ML-DL.png" alt="hechos sobre la técnología IoT" class="rounded-xl w-96 h-52">
                    <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">=></span>
                    -->
            </div>
        </div>
    </div>
</div>
</div>