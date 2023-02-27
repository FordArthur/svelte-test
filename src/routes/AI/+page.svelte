<script>
    let DarkMode = ''
    function DarkModeSwitcher (){
      DarkMode = (DarkMode === '') ? 'dark' : '';
    }
</script>
<div class="{DarkMode}">
    <div class=" w-screen m-auto bg-neutral-200 dark:bg-zinc-900 duration-300 transition ease-in-out delay-75">
        <div class=" w-screen m-auto bg-neutral-200 dark:bg-zinc-900 duration-300 transition ease-in-out delay-75">
            <div class="w-screen h-16">
                <div class="w-screen rounded-sm bg-neutral-300 dark:bg-zinc-800 mx-0.5 h-16 fixed duration-300 transition ease-in-out delay-75 grid grid-rows-2 ">
                    <div class="flex duration-300 transition ease-in-out delay-75">
                        <h1 class="drop-shadow-xl text-3xl font-sans mx-4 mb-2 text-zinc-900 dark:text-stone-400 hover:scale-105 transition ease-linear m-auto">Robótica <span class="transition ease-linear duration-150 hover:bg-lime-900 hover:text-stone-300 rounded-md"> Los Colegiales</span></h1>
                        <button class="button-stnd mx-4 my-2 inset-y-0 "on:click={DarkModeSwitcher}>Modosocuro</button>
                        <a href="/" class="button-stnd mx-2 my-2 px-2">Início</a>
                        <a href="/IoT" class="button-stnd mx-1 my-2 px-4">IoT</a>
                        <a href="/ML" class="button-stnd mx-1 my-2 px-4">ML</a>
                        <a href="/Rb" class="button-stnd mx-1 my-2 px-4">Rób</a>
                        <a href="/BD" class="button-stnd mx-1 my-2 px-4">MD</a>
                        <a href="/Cy" class="button-stnd mx-1 my-2 px-4">Cyb</a>
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
                        La inteligencia artificial se refiere a la creación de sistemas y programas informáticos que pueden realizar tareas que normalmente requerirían inteligencia humana, como el aprendizaje, la toma de decisiones y la resolución de problemas. Estos sistemas utilizan algoritmos y modelos matemáticos para analizar grandes cantidades de datos y generar resultados precisos.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Para que se usan?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        2 / 2

La automatización de procesos empresariales con IA puede incluir tareas como el procesamiento de pagos, la gestión de inventarios y la atención al cliente a través de chatbots. El análisis de datos con IA puede permitir a las empresas descubrir patrones y tendencias en grandes conjuntos de datos para tomar decisiones informadas. La conducción autónoma con IA puede mejorar la seguridad en las carreteras y reducir la congestión del tráfico. En la atención médica, la IA puede ayudar a mejorar el diagnóstico y tratamiento de enfermedades, así como a desarrollar nuevos fármacos y terapias. Sin embargo, es importante tener en cuenta los riesgos y desafíos asociados con el uso de la IA para garantizar que se utilice de manera ética y segura.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        Peligros asociados
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        Las inteligencias artificiales tienen una amplia variedad de aplicaciones en muchos campos, como la medicina, la industria manufacturera, la seguridad y la banca. En medicina, las IA se utilizan para analizar grandes cantidades de datos de pacientes para identificar patrones y desarrollar tratamientos personalizados. En la industria manufacturera, las IA pueden optimizar la producción y el mantenimiento de maquinaria. En seguridad, las IA pueden ayudar a detectar actividades sospechosas en línea y en tiempo real. En banca, las IA pueden procesar grandes volúmenes de datos financieros para identificar tendencias y riesgos potenciales. En resumen, las inteligencias artificiales tienen el potencial de mejorar significativamente nuestra capacidad para tomar decisiones informadas y resolver problemas complejos en una variedad de campos.
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