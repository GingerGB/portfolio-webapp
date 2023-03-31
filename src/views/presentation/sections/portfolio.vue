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

            <div class="mx-auto max-w-7xl lg:px-8 space-y-10">

                <div v-for="(c, iC) in categories" :key="iC" class="pt-4 pb-10 lg:pb-20 w-full">
                    <div class="flex pb-2 xl:pb-10 w-full lg:justify-end px-4 lg:px-0">
                        <div class="font-serif text-4xl lg:text-7xl font-bold tracking-widest uppercase text-purple_giorgia-300 pr-4">{{ (iC+1) }}</div>
                        <div class="font-serif text-4xl lg:text-7xl font-bold tracking-widest uppercase text-green_giorgia-400">{{ c.description }}</div>
                    </div>

                    <div v-for="(s, i) in sections.filter(s => s.category == c.id)" :key="i"
                        class="flex flex-col w-full lg:border border-green_giorgia-200 relative overflow-hiddena">
                        <div class="flex flex-col lg:flex-row items-center w-full py-8 px-4 lg:px-8">
                            <!-- IMAGE EVEN -->
                            <div v-if="(i & 1) && !themesStore.isMD && !themesStore.isSM"
                                class="flex flex-shrink-0 -ml-8 pr-16">
                                <div class="bg-green_giorgia-100 pr-10 pt-10 relative">
                                    <div class="flex justify-end space-x-3 pb-5 pt-5 border-t border-purple_giorgia-400">
                                        <div v-for="(p, iP) in s.programs" class="">
                                            <img :src="`/src/assets/images/programs/${p.image}.svg`" class="w-6 h-8"
                                                v-fbr-tooltip="p.description" />
                                        </div>
                                    </div>
                                    <div class="relative">
                                        <div v-if="s.image === 'goat_island.png'"
                                            class="absolute inset-0 bg-gray-200 mix-blend-multiply"></div>
                                        <img :src="`/src/assets/images/portfolio/${s.image}`"
                                            class="bg-purple_giorgia-500 w-full object-cover" :class="s.imageClasses"
                                            :style="s.imageStyles" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col flex-grow">
                                <!-- TITLE -->
                                <div class="text-purple_giorgia-700 font-serif font-semibold text-4xl lg:text-5xl pb-4 lg:pb-10">
                                    {{ s.title }}
                                </div>
                                <div class="flex flex-wrap items-center space-x-2 lg:pb-6">
                                    <div v-for="t in s.tags" :key="t"
                                        class="bg-green_giorgia-200 text-green_giorgia-700 font-medium text-xs tracking-wider uppercase px-3 py-2 mt-2 lg:mt-0">
                                        {{ t }}
                                    </div>
                                </div>

                                <div v-if="themesStore.isMD || themesStore.isSM"
                                    class="flex flex-shrink-0 mt-4 mb-10 mx-auto">
                                    <div class="relative">
                                        <div class="flex space-x-3 pb-5 pt-5 border-t border-purple_giorgia-400">
                                            <div v-for="(p, iP) in s.programs" class="">
                                                <img :src="`/src/assets/images/programs/${p.image}.svg`" class="w-6 h-8"
                                                    v-fbr-tooltip="p.description" />
                                            </div>
                                        </div>
                                        <div class="relative">
                                            <div v-if="s.image === 'goat_island.png'"
                                                class="absolute inset-0 bg-gray-200 mix-blend-multiply"></div>
                                            <img :src="`/src/assets/images/portfolio/${s.image}`"
                                                class="bg-purple_giorgia-500 w-full object-cover" :class="s.imageClasses"
                                                :style="s.imageStyles" />
                                        </div>
                                    </div>
                                </div>

                                <!-- DESCRIPTION -->
                                <div v-html="s.description" class="text-green_giorgia-700 font-light text-lg"></div>
                                <!-- BUTTON -->
                                <div class="mt-8 flex items-center gap-x-6">
                                    <a href="#"
                                        class="w-full lg:w-auto text-center lg:text-left transition-colors duration-150 ease-in-out bg-purple_giorgia-600 hover:bg-purple_giorgia-700
                                                                                          px-6 py-5 lg:py-3 text-sm font-semibold text-purple_giorgia-50 shadow-sm">Visualizza
                                        progetto</a>
                                </div>
                            </div>
                            <!-- IMAGE ODD -->
                            <div v-if="!(i & 1) && !themesStore.isMD && !themesStore.isSM"
                                class="flex flex-shrink-0 -mr-8 pl-16">
                                <div class="bg-green_giorgia-100 pl-10 pt-10 relative">
                                    <div class="flex space-x-3 pb-5 pt-5 border-t border-purple_giorgia-400">
                                        <div v-for="(p, iP) in s.programs" class="">
                                            <img :src="`/src/assets/images/programs/${p.image}.svg`" class="w-6 h-6"
                                                v-fbr-tooltip="p.description" />
                                        </div>
                                    </div>
                                    <div class="relative">
                                        <div v-if="s.image === 'goat_island.png'"
                                            class="absolute inset-0 bg-gray-200 mix-blend-multiply"></div>
                                        <img :src="`/src/assets/images/portfolio/${s.image}`"
                                            class="bg-purple_giorgia-500 w-full object-cover" :class="s.imageClasses"
                                            :style="s.imageStyles" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
import ProgramIcon from '@/components/icons/ProgramIcon.vue';
import { useThemes } from '@/store';

export type PortfolioSection = {
    title: string;
    category: "set_design" | "photography";
    description: string;
    tags: string[];
    programs: { image: string; description: string }[];
    image: string;
    imageClasses: string;
    imageStyles: string;
}

const themesStore = useThemes();

const comeSangueDescription = `Scrittura e progettazione di un ipotetico film. Dopo averne delineato la struttura narrativa e l'analisi dei personaggi, sia dal punto
di vista psicologico che nei costumi, è stato fatto un lavoro preparatorio riguardante lo studio delle scene, proponendo reference e mood board per la scenografia.
Con photoshop sono stati realizzati i bozzetti delle cinque scene principali. Tre di queste sono state approfondite con piante e prospetti, tutti i dettagli costruttivi
 degli oggetti di scena, le proposte per i prop acquistabili e tutti i complementi d’arredo.`;
const magicklandDescription = `Progetto tecnico della prima scena dell'ipotetico film “2031 – Oltre le porte di Magickland”, comprensivo di plot.
A partire da una foto in location, ho sviluppato il bozzetto della scena con photoshop e progettato il set da costruire in studio. Nel progetto sono analizzate piante e
prospetti, tutti i dettagli costruttivi degli oggetti di scena e vari mood board.`;
const ulisseDescription = `Trasposizione dell’Ulisse di James Joyce ai giorni nostri, durante i moti rivoluzionari di Hong Kong del 2019, per un ipotetico <i>pilot</i>
di una serie tv che rivisita classici della letteratura. Ho sviluppato cinque scene (due esterni da ricostruire in studio e tre interni), di cui sono presenti i bozzetti
modellati in 3d, i progetti tecnici di piante e prospetti, i dettagli costruttivi degli oggetti di scena e lo studio dei
materiali e delle palette colore.`;
const curseDescription = `Ipotesi di ricostruzione set per riproporre la fotografia “The Curse of Nanny Goat Island” del fotografo inglese Matt Henry. Nel progetto sono
analizzate piante e prospetti, tutti i dettagli costruttivi degli oggetti di scena, compresi di studio dei materiali e delle palette colore.`;

const categories: { id: string; description: string }[] = [{ id: "set_design", description: "Set design" }, { id: "photography", description: "Fotografia" }];

const sections: PortfolioSection[] = [{
    title: "Come sangue nella neve", category: "set_design", description: comeSangueDescription, tags: ["scenografia", "progetto tecnico", "fotomanipolazione"],
    programs: [{ image: "autocad", description: "AutoCAD" }, { image: "photoshop", description: "Photoshop" }, { image: "illustrator", description: "Illustrator" }, { image: "indesign", description: "InDesign" }],
    image: "sangue_1.jpg", imageClasses: "h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 80%;"
}, {
    title: "Oltre le porte di Magickland", category: "set_design", description: magicklandDescription, tags: ["scenografia", "scenotecnica", "fotomanipolazione"],
    programs: [{ image: "autocad", description: "AutoCAD" }, { image: "photoshop", description: "Photoshop" }, { image: "illustrator", description: "Illustrator" }],
    image: "magickland.jpg", imageClasses: "h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 80%;"
}, {
    title: "Ulisse", category: "set_design", description: ulisseDescription, tags: ["scenografia", "modellazione 3d", "illuminotecnica"],
    programs: [{ image: "autocad", description: "AutoCAD" }, { image: "3dsmax", description: "3ds Max" }, { image: "maya", description: "Maya" }, { image: "photoshop", description: "Photoshop" }, { image: "illustrator", description: "Illustrator" }],
    image: "ulisse.jpg", imageClasses: "h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 80%;"
}, {
    title: "The Curse of Nanny Goat Island", category: "set_design", description: curseDescription, tags: ["scenografia", "disegno progettuale"],
    programs: [{ image: "autocad", description: "AutoCAD" }, { image: "photoshop", description: "Photoshop" }, { image: "illustrator", description: "Illustrator" }],
    image: "goat_island.png", imageClasses: "h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 40%;"
}, {
    title: "Shooting Daniela e Kevin", category: "photography", description: "Esempio di shooting fotografico in esterna", tags: ["fotografia", "foto editing"],
    programs: [{ image: "photoshop", description: "Photoshop" }],
    image: "daniela_kevin.jpg", imageClasses: "h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 40%;"
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


// .portfolio-section-top, .portfolio-section-bottom {
//     position: absolute;
//     @apply flex border-t bg-green_giorgia-50 border-green_giorgia-200;
//     height: 60px;
//     width: calc(100% + 2px);
//     left: 0px;
//     transform: rotate(-2deg);
//     transform-origin: 0 0;
// }
// .portfolio-section-top {
//     top: 0px;
// }
// .portfolio-section-bottom {
//     bottom: -60px;
// }
</style>
