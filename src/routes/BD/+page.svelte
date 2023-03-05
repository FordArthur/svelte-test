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
                        <a href="{base}/Cy" class="button-stnd mx-1 my-2 px-4">Cyb</a>
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
                        ¿Qué es la big data?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082002742937137212/BD-main.jpg" alt="hechos sobre la técnología IoT" class="rounded-xl w-80 h-52">
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">=></span><span class="font-bold text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75">Definición</span><span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-1">:</span> 
                        El big data se refiere a conjuntos de datos que son tan grandes y complejos que los métodos tradicionales de procesamiento de datos no pueden manejarlos de manera eficiente. A continuación se presentan algunas aclaraciones y ejemplos de cómo el big data se relaciona con <a href="{base}/AI" class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500">la inteligencia artificial</a> y el <a href="{base}/IoT" class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500">machine learning</a>:
                    </p>
                    <ul class="list-disc ">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">La inteligencia artificial (IA) y el machine learning (ML) </span> son tecnologías que se utilizan para analizar grandes conjuntos de datos y extraer patrones y tendencias. La IA se refiere a sistemas que pueden realizar tareas que requieren inteligencia humana, como el aprendizaje, la toma de decisiones y el reconocimiento de patrones. El ML es una técnica de IA que utiliza algoritmos para aprender de los datos y mejorar su rendimiento en tareas específicas.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">El big data proporciona</span> una gran cantidad de datos para que los algoritmos de ML puedan aprender y mejorar su rendimiento. Por ejemplo, en el análisis de sentimientos en redes sociales, el big data proporciona una gran cantidad de datos para que los algoritmos de ML puedan aprender a identificar patrones y tendencias en las opiniones de los usuarios.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500">En el campo de la investigación científica y médica,</span> el big data se utiliza para analizar grandes conjuntos de datos y descubrir patrones y tendencias que pueden conducir a nuevos descubrimientos y avances en la comprensión de enfermedades y tratamientos. Por ejemplo, los investigadores pueden utilizar el análisis de big data para identificar patrones en los datos genéticos y descubrir nuevas formas de tratar enfermedades.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">El big data también</span> se utiliza en la industria de la tecnología para mejorar la eficiencia de las redes y la seguridad de la información. Por ejemplo, los proveedores de servicios de internet pueden utilizar el análisis de big data para identificar patrones de tráfico en la red y optimizar la distribución de datos. Además, el análisis de big data puede ayudar a las organizaciones a detectar y prevenir ataques cibernéticos mediante la identificación de patrones de comportamiento malicioso en los datos de la red.
                        </li>
                    </ul>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Para que se usa la big data?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082003760479486164/1.png" alt="hechos sobre la técnología IoT" class="rounded-xl w-80 h-52">
                        Algunas aplicaciones del big data incluyen:
                    </p>
                    <ul class="list-disc ">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Mejora de la toma de decisiones empresariales:</span> Las empresas pueden utilizar el análisis de big data para entender mejor las preferencias de los clientes y mejorar la eficiencia de sus procesos de negocio. Por ejemplo, los minoristas pueden utilizar el análisis de big data para identificar los patrones de compra de los clientes y ajustar sus estrategias de marketing en consecuencia. También pueden utilizar el análisis de big data para mejorar la eficiencia de sus cadenas de suministro.
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Investigación científica y médica:</span> La investigación científica y médica también se beneficia del análisis de big data. Por ejemplo, los investigadores pueden utilizar el análisis de big data para estudiar la genómica y la proteómica, lo que puede conducir a nuevos descubrimientos y tratamientos médicos. También se puede utilizar el análisis de big data para identificar patrones y tendencias en grandes conjuntos de datos de pacientes y mejorar la eficacia de los tratamientos médicos.
                        </li>
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500">  Mejora de la eficiencia de las redes y la seguridad de la información:</span> En la industria de la tecnología, el big data se utiliza para mejorar la eficiencia de las redes y la seguridad de la información. Por ejemplo, los proveedores de servicios de internet pueden utilizar el análisis de big data para identificar patrones en el uso de la red y mejorar la calidad del servicio. También se puede utilizar el análisis de big data para detectar y prevenir amenazas de seguridad en línea, como ataques de malware y phishing.
                        </li>

                    </ul>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué problemas conlleva? 
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        El uso de big data, o datos masivos, puede proporcionar información valiosa para las empresas y las organizaciones, permitiéndoles tomar decisiones más informadas y mejorar su rendimiento. Los datos pueden ser recopilados de diversas fuentes, incluyendo redes sociales, sensores y sistemas de información empresarial. Esta información puede ser analizada mediante algoritmos y herramientas de análisis de datos para identificar patrones y tendencias que de otra manera no serían detectados. El big data puede utilizarse para mejorar la eficiencia empresarial, predecir tendencias de mercado y mejorar la atención médica y la seguridad pública. Sin embargo, se deben tomar precauciones para garantizar que los datos sean manejados de manera ética y responsable, y para evitar la violación de la privacidad y la seguridad de los datos. Además, los algoritmos utilizados para analizar los datos deben ser examinados cuidadosamente para evitar la discriminación y otros problemas potenciales. En conclusión, el big data es una herramienta valiosa para la toma de decisiones empresariales y la mejora de los servicios públicos, pero se deben tomar medidas para garantizar que los datos sean manejados de manera responsable y ética.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        Conclusión
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        En resumen, el big data se refiere a conjuntos de datos masivos y complejos que requieren tecnologías como la inteligencia artificial y el machine learning para ser analizados y extraer patrones y tendencias. Esta herramienta puede ser utilizada en diferentes ámbitos, como la mejora de la toma de decisiones empresariales, la investigación científica y médica, y la mejora de la eficiencia de las redes y la seguridad de la información. Sin embargo, es importante tomar precauciones para garantizar que los datos sean manejados de manera ética y responsable y para evitar la violación de la privacidad y la seguridad de los datos, así como examinar cuidadosamente los algoritmos utilizados para evitar problemas potenciales como la discriminación. En definitiva, el big data puede ser una herramienta muy valiosa, pero su uso debe ser responsable y ético.
                    </p>
  
            </div>
        </div>
    </div>
</div>
</div>