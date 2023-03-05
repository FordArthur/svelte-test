<script>
    let DarkMode = ''
    function DarkModeSwitcher (){
      DarkMode = (DarkMode === '') ? 'dark' : '';
    }
</script>
<div class="{DarkMode}">
    <div class=" w-screen h-screen m-auto bg-neutral-200 dark:bg-zinc-900 duration-300 transition ease-in-out delay-75">
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
                        <a href="/Cy" class="button-stnd mx-1 my-2 px-4">Cyb</a>
                        <a href="/AI" class="button-stnd mx-1 my-2 px-4">IA</a>
                    </div>
                </div>
            </div>
            <div class="grid justify-center">
                <div class=" w-[1600px] bg-stone-300 dark:bg-zinc-800 rounded-md m-4 duration-300 transition ease-in-out delay-75 grid">
                    <div class="grid justify-around">
                        <h1 class="text-3xl text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block font-extrabold">¿Qué tech stack he usado?</h1>
                    </div>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block text-xl">
                        <span class="font-bold text-emerald-800 dark:text-emerald-500 hover:text-amber-700 dark:hover:text-amber-500 mx-2">Un tech stack es el conjunto de soluciones usadas para resolver un problema, en este caso ha sido crear la página web.</span> <br>
                        <span class="font-bold text-sky-800 dark:text-sky-500 hover:text-teal-600 dark:hover:text-teal-400 mx-2">Usuario:</span> Escribe un "about" sobre la página web que he hecho, menciona que he usado sveltkit, tailwindcss, vite y github pages. Tambien menciona que tu has sido el principal escritor de los articulos con revision
                    </p>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block text-xl group">
                        <span class="font-bold text-sky-800 dark:text-sky-500 hover:text-teal-600 dark:hover:text-teal-400 mx-2">ChatGPT:</span><span class="opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out delay-75">¡Bienvenidos a mi página web! Aquí encontrarás una variedad de artículos escritos por ChatGPT, un modelo de lenguaje avanzado diseñado por OpenAI. Desde tecnología hasta estilo de vida, estos artículos cubren una amplia gama de temas para satisfacer tus intereses. <br>

                            Para crear esta página web, utilicé SvelteKit como marco de aplicación web para crear una experiencia de usuario fluida y receptiva. Para diseñar el aspecto visual de la página, utilicé Tailwind CSS, una biblioteca de estilos CSS altamente personalizable y fácil de usar. Y para mejorar el rendimiento y la velocidad de carga de la página, utilicé Vite, un paquete de herramientas de desarrollo web que utiliza la compilación en tiempo real para mejorar el rendimiento y la velocidad de la página. <br>
                            
                            Finalmente, GitHub Pages fue la plataforma de alojamiento elegida para publicar esta página web en línea. <br>
                            
                            Aunque soy el creador principal de la página web, ChatGPT ha sido el principal escritor de los artículos. Sin embargo, antes de su publicación, cada artículo fue revisado y editado cuidadosamente para garantizar la precisión y la calidad del contenido. <br>
                            
                            ¡Gracias por visitar mi página web! Espero que disfrutes leyendo los artículos tanto como yo disfruté escribirlos. <br>
                    </p>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block text-xl group">
                        <span class="font-bold text-sky-800 dark:text-sky-500 hover:text-teal-600 dark:hover:text-teal-400 mx-2">Usuario:</span> Amplia el siguiente texto: Aunque yo normalmente escribo código para correrlo nativamente, me ha gustado la experiencia de crear una página web.
                    </p>
                    <p class="text-zinc-900 dark:text-stone-400 duration-300 transition ease-in-out delay-75 m-2 block text-xl group">
                        <span class="font-bold text-sky-800 dark:text-sky-500 hover:text-teal-600 dark:hover:text-teal-400 mx-2">ChatGPT:</span><span class="opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out delay-75">Como programador, es común que uno se especialice en el desarrollo de aplicaciones que se ejecutan de forma nativa en diferentes plataformas o sistemas operativos. Sin embargo, la experiencia de crear una página web puede ser muy enriquecedora y proporcionar una perspectiva diferente en cuanto al desarrollo de software. <br>

                            Al crear una página web, uno puede experimentar con diferentes tecnologías y lenguajes de programación que pueden ser muy útiles en otras áreas de desarrollo. Además, las páginas web también requieren una comprensión de diseño y usabilidad, lo que puede ser beneficioso para cualquier tipo de aplicación que se desarrolle. <br>
                            
                            Además, la creación de una página web puede proporcionar una gran satisfacción personal. Uno puede ver sus ideas cobrar vida en una página web que puede ser accesible desde cualquier lugar del mundo. También puede ser una forma de compartir información o promocionar productos o servicios. <br>
                            
                            En definitiva, aunque el desarrollo nativo de aplicaciones sigue siendo una parte importante del trabajo de un programador, crear una página web puede ser una experiencia muy valiosa que puede proporcionar nuevos conocimientos y perspectivas. <br>
                    </p>
            </div>
        </div>
    </div>
</div>
</div>