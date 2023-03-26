<template>
    <div class="relative mt-40 pt-24 bg-green_giorgia-200">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <!-- TITLE -->
            <div
                class="relative tracking-widest font-serif text-green_giorgia-700 font-semibold text-5xl md:text-6xl pb-20">
                <span class="z-0 absolute text-purple_giorgia-500 font-bold about-me-title-initial"
                    style="color: #9fc1b6;">P</span>
                <span class="z-10 relative">
                    PORTFOLIO
                    <span class="about-me-purple-thing"></span>
                </span>
            </div>
        </div>


        <div class="bg-green_giorgia-50 w-full flex flex-col pt-20">

            <div class="mx-auto max-w-7xl px-6 lg:px-8 space-y-10">
                <div v-for="(s, i) in sections" :key="i" class="flex flex-col w-full border border-green_giorgia-200">
                    <div class="flex items-center w-full p-8">
                        <!-- IMAGE EVEN -->
                        <div v-if="i & 1" class="flex flex-shrink-0 -ml-8 pr-16">
                            <div class="bg-green_giorgia-100 pr-10 pt-10">
                                <img :src="`/src/assets/images/portfolio/${s.image}.jpg`"
                                    class="bg-purple_giorgia-500 w-full h-full object-cover" :class="s.imageClasses"
                                    :style="s.imageStyles" />
                            </div>
                        </div>
                        <div class="flex flex-col flex-grow">
                            <!-- TITLE -->
                            <div class="text-purple_giorgia-700 font-serif font-semibold text-5xl pb-10">
                                {{ s.title }}
                            </div>
                            <div class="flex items-center space-x-2 pb-6">
                                <div v-for="t in s.tags" :key="t"
                                    class="bg-green_giorgia-200 text-green_giorgia-700 font-medium text-xs tracking-wider uppercase px-3 py-2">
                                    {{ t }}
                                </div>
                            </div>
                            <!-- DESCRIPTION -->
                            <div class="text-green_giorgia-700 font-light text-lg">
                                {{ s.description }}
                            </div>
                            <!-- BUTTON -->
                            <div class="mt-8 flex items-center gap-x-6">
                                <a href="#"
                                    class="transition-colors duration-150 ease-in-out bg-purple_giorgia-600 hover:bg-purple_giorgia-700
                                                                                          px-6 py-3 text-sm font-semibold text-purple_giorgia-50 shadow-sm">Visualizza
                                    progetto</a>
                            </div>
                        </div>
                        <!-- IMAGE ODD -->
                        <div v-if="!(i & 1)" class="flex flex-shrink-0 -mr-8 pl-16">
                            <div class="bg-green_giorgia-100 pl-10 pt-10">
                                <img :src="`/src/assets/images/portfolio/${s.image}.jpg`"
                                    class="bg-purple_giorgia-500 w-full h-full object-cover" :class="s.imageClasses"
                                    :style="s.imageStyles" />
                            </div>
                        </div>
                    </div>

                    <!-- <svg class="w-full fill-green_giorgia-50" style="height: 60px;" viewBox="0 0 1 1" preserveAspectRatio="none">
                        <polygon points="0,1 1,1 1,0" />
                    </svg> -->
                </div>

                <div class="py-32" />
                <div class="py-32" />
                <div class="py-32" />
                <div class="py-32" />
            </div>


        </div>
    </div>
</template>


<script setup lang="ts">
export type PortfolioSection = {
    title: string;
    description: string;
    tags: string[];
    image: string;
    imageClasses: string;
    imageStyles: string;
}

const comeSangueDescription = `Progetto incentrato sulla scenografia di un film, mostrando il processo di creare gli elementi visivi del film,
    dai concept art e schizzi alle scenografie finali e oggetti di scena.
    Il portfolio include schizzi dettagliati e mood board che esplorano la tavolozza dei colori,
    l'illuminazione e le trame che verranno utilizzate per creare l'atmosfera fredda e desolata del
    film.Il designer ha scelto con cura la location per il film, un deserto remoto e innevato, per
    creare una sensazione di isolamento e vulnerabilità per i personaggi.`;
const magicklandDescription = `I set e gli oggetti di scena progettati per il film sono anche in mostra nel progetto portfolio. Il designer ha
    creato una gamma di ambienti diversi in cui i personaggi possono muoversi, dalle animate strade cittadine alle vaste foreste magiche.
    Ogni set è progettato per mostrare l'integrazione di magia e tecnologia, con elementi fantastici che si fondono perfettamente con la tecnologia moderna.`;
const ulisseDescription = `Il progetto si caratterizza anche per l'attenzione ai dettagli del designer nella creazione di oggetti di scena e costumi.
    I costumi dei personaggi sono realizzati per riflettere il mondo futuristico e magico in cui abitano, con dettagli intricati e design unici. Il designer
    ha anche creato una serie di dispositivi e artefatti magici che svolgono un ruolo cruciale nella storia, dalle macchine volanti e gli hoverboard alle bacchette magiche e agli amuleti.`;

const sections: PortfolioSection[] = [{
    title: "Come sangue nella neve", description: comeSangueDescription, tags: ["design", "illustration", "matte-painting"],
    image: "sangue_1", imageClasses: "h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 80%;"
}, {
    title: "Magickland", description: magicklandDescription, tags: ["design", "progetto tecnico", "scenography"],
    image: "magickland", imageClasses: "h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 80%;"
}, {
    title: "Ulisse", description: ulisseDescription, tags: ["scenografia", "illustration", "scenography"],
    image: "ulisse", imageClasses: "h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 80%;"
}];

</script>

<style lang="scss">
// TITLE
.about-me-purple-thing {
    position: absolute;
    bottom: 1px;
    left: 7%;
    width: 100%;
    height: 4px;
    @apply bg-purple_giorgia-600;
    z-index: -1;
}

// TITLE INITIAL
.about-me-title-initial {
    font-size: 147px;
    margin-top: -80px;
}

@media (min-width: 1280px) {
    .about-me-title-initial {
        font-size: 194px;
        margin-top: -109px;
    }
}
</style>
