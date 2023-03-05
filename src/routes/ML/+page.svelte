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
                    </div>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué es el Machine Learning?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">=></span><span class="font-bold text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75">Definición</span><span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-1">:</span> 
                        El Machine Learning <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">(Aprendizaje automático, en Español)</span>
                        es la rama de las <a class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500" href="{base}/AI">Inteligencias Ártificiales</a> la cual investiga el entrenamiento de las Inteligencias Artificiales, como los distintos métodos del descenso del gradiente del coste de una IA <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">(Basicamente, la mejoría de la IA haciendo su tarea)</span>, ya sea con la retropropagación, mutación genética, o cualquier algoritmo de aprendizaje.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Para qué se usa?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        El machine learning tiene muchas aplicaciones prácticas en el mundo de hoy, desde la detección de fraudes en las transacciones financieras hasta la clasificación de imágenes médicas para el diagnóstico de enfermedades. Además, el machine learning es esencial para el análisis de big data, que se refiere a la recopilación y análisis de grandes cantidades de datos complejos. El machine learning permite a los analistas identificar patrones y tendencias en estos datos, lo que puede ayudar a las empresas a tomar decisiones más informadas y mejorar sus procesos. 
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué técnicas hay?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        Existen varias técnicas de aprendizaje utilizadas por las IAs, y cada una de ellas se utiliza en diferentes situaciones dependiendo del problema a resolver y de los datos disponibles. Aquí hay una lista de algunas de las técnicas de aprendizaje más comunes:
                    </p>
                    <ul class="list-disc ">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Aprendizaje supervisado:</span> este enfoque utiliza conjuntos de datos etiquetados para entrenar al modelo. El algoritmo de IA recibe entradas y salidas conocidas y se ajusta para predecir la salida correcta para entradas desconocidas.
                        </li>
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082004097974149150/ML-AS.webp" alt="hechos sobre la técnología IoT" class="rounded-xl w-96 h-52">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Aprendizaje no supervisado:</span> en este enfoque, el modelo recibe datos no etiquetados y tiene que encontrar patrones y estructuras en ellos sin ninguna guía explícita. Esta técnica se utiliza comúnmente para el agrupamiento <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500">(clustering)</span> y la reducción de dimensionalidad.
                        </li>
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082004098687172736/ML-ANS.webp" alt="hechos sobre la técnología IoT" class="rounded-xl w-80 h-52">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500">Aprendizaje por refuerzo:</span> este enfoque implica que un modelo interactúe con un ambiente y reciba recompensas o castigos según su comportamiento. El modelo aprende a maximizar la recompensa a lo largo del tiempo.
                        </li>
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082004098427138089/ML-AR.png" alt="hechos sobre la técnología IoT" class="rounded-xl w-96 h-52">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Redes neuronales:</span> estas son estructuras de aprendizaje profundo que se basan en la simulación de las neuronas del cerebro humano. Las redes neuronales pueden ser supervisadas o no supervisadas y se utilizan para una amplia gama de problemas, como el procesamiento de imágenes y el reconocimiento de voz.
                        </li>
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082005450985320498/Al5qXx8emt9IAAAAAElFTkSuQmCC.png" alt="hechos sobre la técnología IoT" class="rounded-xl w-96 h-52">
                        <li class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-4">
                            <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 ">Aprendizaje profundo:</span> este enfoque utiliza redes neuronales profundas para aprender de datos complejos y de gran tamaño. El aprendizaje profundo ha demostrado ser muy efectivo en áreas como el procesamiento de lenguaje natural y la visión por computadora.
                        </li>
                        <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082004097521168454/ML-DL.png" alt="hechos sobre la técnología IoT" class="rounded-xl w-96 h-52">
                    </ul>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        Conclusión
                    </h2>
                    
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        En conclusión, el Machine Learning es una disciplina clave en el campo de la Inteligencia Artificial, que permite a las máquinas aprender de los datos y mejorar su rendimiento en diversas tareas. Es utilizado en una variedad de campos, incluyendo finanzas, salud, comercio electrónico, y más, y ha demostrado ser especialmente útil para el análisis de Big Data. Existen varias técnicas de aprendizaje utilizadas por las IAs, y cada una de ellas se utiliza en diferentes situaciones dependiendo del problema a resolver y de los datos disponibles. A medida que el Machine Learning continúa evolucionando, se espera que tenga un impacto aún mayor en la forma en que las empresas toman decisiones y los consumidores interactúan con la tecnología.
                    </p>
                    <img src="https://cdn.discordapp.com/attachments/736298436885872731/1082004097730891826/ML-Concl.png" alt="hechos sobre la técnología IoT" class="rounded-xl w-96 h-52 float-right">
            </div>
        </div>
    </div>
</div>
</div>