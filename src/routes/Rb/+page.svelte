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
                        <a href="/BD" class="button-stnd mx-1 my-2 px-4">DM</a>
                        <a href="/Cy" class="button-stnd mx-1 my-2 px-4">Cyb</a>
                        <a href="/AI" class="button-stnd mx-1 my-2 px-4">IA</a>
                    </div>
                </div>
            </div>
            <div class="grid justify-center">
                <div class=" w-[1600px] bg-stone-300 dark:bg-zinc-800 rounded-md m-4 duration-300 transition ease-in-out delay-75 grid">
                    <div class="grid justify-around">
                        <h1 class="text-3xl text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-extrabold">Ínicio</h1>
                    </div>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué es la robótica?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        La robótica es una disciplina tecnológica que ha avanzado significativamente en las últimas décadas, gracias a los desarrollos en la mecánica, la electrónica y la informática. Esta disciplina se enfoca en diseñar, construir y operar robots, que son máquinas programables capaces de realizar tareas automatizadas. Los robots pueden ser utilizados en una amplia variedad de industrias, incluyendo la automotriz, la aeroespacial, la manufacturera, la médica y la militar.

                        Además, la robótica también está presente en la vida cotidiana de las personas, en forma de robots de limpieza, robots de entretenimiento y robots de asistencia para personas con discapacidad. Los robots también se utilizan en la exploración espacial y en la investigación científica.

                        Una de las principales ventajas de la robótica es su capacidad para automatizar tareas repetitivas y peligrosas, lo que aumenta la seguridad en las operaciones y reduce la fatiga del personal. También pueden realizar tareas que son demasiado difíciles, costosas o peligrosas para los seres humanos.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Para qué se usan los robots?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        Los robots se utilizan en una variedad de aplicaciones, desde la manufactura y la construcción hasta la exploración espacial y la atención médica. Los robots industriales, por ejemplo, se utilizan en la producción en masa de bienes, donde pueden realizar tareas repetitivas de manera más rápida y precisa que los humanos. Los robots quirúrgicos se utilizan en procedimientos médicos complejos, donde pueden realizar operaciones de manera más precisa y menos invasiva que los cirujanos humanos.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        ¿Qué limitaciones tienen?
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        A pesar de los avances significativos en la tecnología robótica en las últimas décadas, todavía existen limitaciones importantes en su uso. Una de las mayores limitaciones es la capacidad de programar robots para que se adapten a situaciones imprevistas. Aunque los robots pueden realizar tareas repetitivas y predecibles con precisión, tienen dificultades para lidiar con situaciones cambiantes y desconocidas. La inteligencia artificial y el aprendizaje automático pueden ayudar a mejorar la capacidad de los robots para adaptarse a estas situaciones, pero aún se necesita más investigación en esta área.

                        Además, los robots también pueden ser costosos de fabricar y mantener, lo que limita su uso en aplicaciones más pequeñas y en países en desarrollo. Los robots industriales y médicos pueden costar cientos de miles de dólares, lo que significa que solo las grandes empresas o los centros médicos pueden permitirse utilizarlos. Esto limita su uso en aplicaciones más pequeñas, como en hogares o pequeñas empresas, donde el costo de un robot es prohibitivo.

                        Por otro lado, el desarrollo de robots más asequibles y fáciles de usar, como los robots colaborativos <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">(cobots)</span>, está permitiendo que más empresas y organizaciones utilicen la tecnología robótica para mejorar la eficiencia y la calidad. Además, la robótica también se está utilizando en aplicaciones sociales, como el cuidado de ancianos y discapacitados, lo que puede mejorar la calidad de vida de muchas personas.
                    </p>
                    <h2 class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-bold text-2xl">
                        Conclusión
                    </h2>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block">
                        En resumen, la robótica es una disciplina tecnológica interdisciplinaria que combina la mecánica, la electrónica y la informática para desarrollar robots capaces de realizar una amplia gama de tareas. Aunque hay limitaciones en su uso, la robótica tiene la capacidad de automatizar tareas peligrosas y repetitivas, lo que aumenta la seguridad y reduce la fatiga del personal en diversas industrias.
                    </p>
 
            </div>
        </div>
    </div>
</div>
</div>