<template>
    <div class="relative pt-32 lg:pt-52 bg-green_giorgia-200">
        <SectionHeader initial="P" text="Portfolio" :spaced-bottom="true" />

        <div class="bg-green_giorgia-50 w-full flex flex-col pt-20 lg:pt-36">

            <div class="flex mx-auto max-w-7xl lg:px-8 space-y-10">

                <div class="flex flex-col flex-grow">
                    <!-- CATEGORY LIST -->
                    <div v-for="(c, iC) in categories" :key="iC" class="w-full pt-4 pb-4 lg:pb-20" :id="'category_' + c.id">
                        <div class="flex pb-2 lg:pb-0 w-full lg:justify-end px-4 lg:px-0 lg:-mb-9">
                            <div
                                class="font-serif text-4xl lg:text-8xl font-bold tracking-widest uppercase pr-4 text-purple_giorgia-600 lg:bg-gradient-to-b lg:from-62 lg:to-62 lg:from-purple_giorgia-500 lg:to-purple_giorgia-300 lg:bg-clip-text lg:text-transparent">
                                {{ (iC + 1) }}</div>
                            <div
                                class="font-serif text-4xl lg:text-8xl font-bold tracking-widest uppercase text-green_giorgia-600 lg:bg-gradient-to-b lg:from-62 lg:to-62 lg:from-green_giorgia-500 lg:to-green_giorgia-300 lg:bg-clip-text lg:text-transparent">
                                {{ c.description }}</div>
                        </div>

                        <!-- SECTION LIST -->
                        <div v-for="(s, i) in sections.filter(s => s.category == c.id)" :key="i"
                            class="flex flex-col w-full lg:border border-green_giorgia-200 relative mb-8 lg:mb-16">
                            <div class="flex flex-col lg:flex-row items-center w-full py-8 lg:pt-12 px-4 lg:px-8">
                                <!-- IMAGE EVEN -->
                                <div v-if="(i & 1) && !themesStore.isMD && !themesStore.isSM"
                                    class="flex flex-shrink-0 -ml-8 pr-16">
                                    <div class="bg-green_giorgia-100 pr-10 pt-10 relative">
                                        <div
                                            class="flex justify-end space-x-3 pb-5 pt-5 border-t border-purple_giorgia-400">
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
                                    <div
                                        class="text-purple_giorgia-700 font-serif font-semibold text-4xl lg:text-5xl pb-4 lg:pb-10">
                                        {{ s.title }}
                                    </div>
                                    <div class="flex flex-wrap items-center space-x-2 lg:pb-6">
                                        <div v-for="t in s.tags" :key="t"
                                            class="bg-green_giorgia-200 text-green_giorgia-700 font-medium text-xs tracking-wider uppercase px-3 py-2 mt-2 lg:mt-0">
                                            {{ t }}
                                        </div>
                                    </div>

                                    <!-- IMAGE MOBILE -->
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
                                                    class="bg-purple_giorgia-500 w-full object-cover"
                                                    :class="s.imageClasses" :style="s.imageStyles" />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- DESCRIPTION -->
                                    <div v-html="s.description" class="text-green_giorgia-700 font-light text-lg"></div>
                                    <!-- BUTTON -->
                                    <div class="mt-8 flex items-center gap-x-6">
                                        <a href="#" target="_blank"
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
                </div>

                <!-- CATEGORY MENU (ONLY DESKTOP) -->
                <div class="pt-9 hidden lg:block">
                    <div class="sticky top-0 border-l border-r border-t border-green_giorgia-200 -ml-px">
                        <div v-for="(c, iC) in categories" :key="iC"
                            class="px-3 py-6 border-b cursor-pointer transition-colors ease-in-out duration-150 font-extralight uppercase text-green_giorgia-600 hover:bg-green_giorgia-100 border-green_giorgia-200"
                            @click="scrollToCategory(c.id)" :class="isCategoryActive(c.id) ? 'bg-green_giorgia-200' : ''"
                            style="writing-mode: vertical-rl;">
                            {{ c.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import SectionHeader from "@/components/SectionHeader.vue";
import { useThemes } from '@/store';

export type PortfolioSection = {
    title: string;
    category: number;
    description: string;
    tags: string[];
    programs: { image: string; description: string }[];
    image: string;
    imageClasses: string;
    imageStyles: string;
}

const enum CategoryType {
    set_design,
    photography,
    video,
    photoediting
}

const themesStore = useThemes();

const comeSangueDescription = `Scrittura e progettazione di un ipotetico film. Dopo averne delineato la struttura narrativa e l'analisi dei personaggi, sia dal punto
di vista psicologico che nei costumi, è stato fatto un lavoro preparatorio riguardante lo studio delle scene, proponendo reference e mood board per la scenografia.
Con photoshop sono stati realizzati i bozzetti delle cinque scene principali. Tre di queste sono state approfondite con piante e prospetti, tutti i dettagli costruttivi
 degli oggetti di scena, le proposte per i prop acquistabili ed i complementi d’arredo.`;
const magicklandDescription = `Progetto tecnico della prima scena dell'ipotetico film <i>2031 – Oltre le porte di Magickland</i>, comprensivo di plot.
A partire da una foto in location, ho sviluppato il bozzetto della scena con photoshop e progettato il set da costruire in studio. Nel progetto sono analizzate piante e
prospetti, tutti i dettagli costruttivi degli oggetti di scena ed i vari mood board.`;
const ulisseDescription = `Trasposizione dell'<i>Ulisse</i> di James Joyce ai giorni nostri, durante i moti rivoluzionari di Hong Kong del 2019, per un ipotetico pilot
di una serie tv che rivisita i classici della letteratura. Ho sviluppato cinque scene (due esterni da ricostruire in studio e tre interni), di cui sono presenti i bozzetti
modellati in 3d, i progetti tecnici di piante e prospetti, i dettagli costruttivi degli oggetti di scena e lo studio dei
materiali e delle palette colore.`;
const curseDescription = `Ipotesi di ricostruzione set per riproporre la fotografia <i>The Curse of Nanny Goat Island</i> del fotografo inglese Matt Henry. Nel progetto sono
analizzate piante e prospetti, tutti i dettagli costruttivi degli oggetti di scena, compresi di studio dei materiali e delle palette colore.`;
const danielaKevinShootingDescription = `Esempio di shooting fotografico in esterna madre e figlio`;
const hekateDescription = `Progetto artistico personale in autoscatto, performato durante la Quarantena: l'incarnazione di una triplice forma di me, confinata nei pochi
metri concessi dalle necessità del momento, partendo dal bisogno di fare compagnia a me stessa tra il misticismo e la meditazione, con l’uso creativo della fantasia e un pizzico di magia.`;
const noPlaceLikeHomeDescription = `Cortometraggio di cui è stata curata l’intera produzione, dalla scrittura, alla regia, compreso il lavoro di montaggio e post produzione.`;
const urbanMemoriesDescription = `Progetto fotografico sulle case popolari <i>INA – Casa</i> nel quartiere Barca di Bologna.`;
const photographicCollectionDescription = `Esempi fotografici di varia natura, che spaziano tra progetti personali di diversi generi fotografici.`;
const scandaloVsDanielMasterDescription = `Video di un match di wrestling che vede sfidarsi i campioni della federazione milanese <i>TCW – Total Combat Wrestling</i> e della londinese
<i>NFW - New Force Wrestling</i>. Il video è stato girato e montato, sottoposto poi a varie compressioni e ad una post produzione per riproporre l’effetto e le aberrazioni di una
vera VHS degli anni Ottanta. A precedere il montaggio dell’incontro, un’opening volutamente kitsch che si ispira a quelle dei programmi del decennio.`;
const theMagicianDescription = `Sonorizzazione del film senza sonoro <i>The Magician</i> del 1900, dall’archivio Edison. Fa parte di un progetto di tre sonorizzazioni
proiettate alla White Night dell’Accademia di Belle Arti di Bologna del 2017.`;
const photoEditing1Description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam.`;
const photoEditing2Description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam.`;
const photoEditing3Description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam.`;
const photoEditing4Description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam.`;

const categories: { id: CategoryType; description: string }[] = [{ id: CategoryType.set_design, description: "Set design" }, { id: CategoryType.photography, description: "Fotografia" },
{ id: CategoryType.video, description: "Video" }, { id: CategoryType.photoediting, description: "Photo editing" }];

const sections: PortfolioSection[] = [{
    title: "Come sangue nella neve", category: CategoryType.set_design, description: comeSangueDescription, tags: ["scenografia", "progetto tecnico", "fotomanipolazione"],
    programs: [{ image: "autocad", description: "AutoCAD" }, { image: "photoshop", description: "Photoshop" }, { image: "illustrator", description: "Illustrator" }, { image: "indesign", description: "InDesign" }],
    image: "sangue_1.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 80%;"
}, {
    title: "Oltre le porte di Magickland", category: CategoryType.set_design, description: magicklandDescription, tags: ["scenografia", "scenotecnica", "fotomanipolazione"],
    programs: [{ image: "autocad", description: "AutoCAD" }, { image: "photoshop", description: "Photoshop" }, { image: "illustrator", description: "Illustrator" }],
    image: "magickland.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 80%;"
}, {
    title: "Ulisse", category: CategoryType.set_design, description: ulisseDescription, tags: ["scenografia", "modellazione 3d", "illuminotecnica"],
    programs: [{ image: "autocad", description: "AutoCAD" }, { image: "3dsmax", description: "3ds Max" }, { image: "maya", description: "Maya" }, { image: "photoshop", description: "Photoshop" }, { image: "illustrator", description: "Illustrator" }],
    image: "ulisse.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 80%;"
}, {
    title: "The Curse of Nanny Goat Island", category: CategoryType.set_design, description: curseDescription, tags: ["scenografia", "disegno progettuale"],
    programs: [{ image: "autocad", description: "AutoCAD" }, { image: "photoshop", description: "Photoshop" }, { image: "illustrator", description: "Illustrator" }],
    image: "goat_island.png", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 40%;"
}, {
    title: "Shooting Daniela e Kevin", category: CategoryType.photography, description: danielaKevinShootingDescription, tags: ["fotografia", "photo editing"],
    programs: [{ image: "lightroom", description: "Lightroom" }, { image: "photoshop", description: "Photoshop" }],
    image: "daniela_kevin.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 40%;"
}, {
    title: "Hekate", category: CategoryType.photography, description: hekateDescription, tags: ["fotografia", "photo editing"],
    programs: [{ image: "photoshop", description: "Photoshop" }],
    image: "hekate.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 65%;"
}, {
    title: "Urban Memories", category: CategoryType.photography, description: urbanMemoriesDescription, tags: ["fotografia", "photo editing", "impaginazione"],
    programs: [{ image: "photoshop", description: "Photoshop" }, { image: "indesign", description: "InDesign" }],
    image: "urban_memories_3.png", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 15%;"
}, {
    title: "Raccolta fotografica", category: CategoryType.photography, description: photographicCollectionDescription, tags: ["fotografia", "photo editing"],
    programs: [{ image: "lightroom", description: "Lightroom" }, { image: "photoshop", description: "Photoshop" }],
    image: "photographic_collection.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 40%;"
}, {
    title: "There’s no place like home", category: CategoryType.video, description: noPlaceLikeHomeDescription, tags: ["video editing", "montaggio", "sound design"],
    programs: [{ image: "premiere", description: "Premiere" }, { image: "audition", description: "Audition" }],
    image: "no_place_like_home.png", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 40%;"
}, {
    title: "Scandalo! vs Daniel Masters", category: CategoryType.video, description: scandaloVsDanielMasterDescription, tags: ["video editing", "montaggio", "video grafica"],
    programs: [{ image: "premiere", description: "Premiere" }, { image: "after_effects", description: "After Effects" }, { image: "audition", description: "Audition" }],
    image: "scandalo_vs_daniel_masters.png", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9; object-position: 0 20%;"
}, {
    title: "The Magician", category: CategoryType.video, description: theMagicianDescription, tags: ["sound design"],
    programs: [{ image: "premiere", description: "Premiere" }, { image: "audition", description: "Audition" }],
    image: "the_magician.gif", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9;"
}, {
    title: "Photo Editing 1", category: CategoryType.photoediting, description: photoEditing1Description, tags: ["photo editing", "fotomanipolazione"],
    programs: [{ image: "photoshop", description: "Photoshop" }],
    image: "photo_editing_1.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9;"
}, {
    title: "Photo Editing 2", category: CategoryType.photoediting, description: photoEditing2Description, tags: ["photo editing", "fotomanipolazione"],
    programs: [{ image: "photoshop", description: "Photoshop" }],
    image: "photo_editing_2.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9;"
}, {
    title: "Photo Editing 3", category: CategoryType.photoediting, description: photoEditing3Description, tags: ["photo editing", "fotomanipolazione"],
    programs: [{ image: "photoshop", description: "Photoshop" }],
    image: "photo_editing_3.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9;"
}, {
    title: "Photo Editing 4", category: CategoryType.photoediting, description: photoEditing4Description, tags: ["photo editing", "fotomanipolazione"],
    programs: [{ image: "photoshop", description: "Photoshop" }],
    image: "photo_editing_4.jpg", imageClasses: "lg:h-72", imageStyles: "aspect-ratio: 16/9;"
},

];

function scrollToCategory(categoryId: number) {
    const categoryElement = document.getElementById('category_' + categoryId);
    if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: "smooth" });
    }
}

function isCategoryActive(categoryId: number) {
    const categoryElement = document.getElementById('category_' + categoryId);
    if (categoryElement) {
        const rect = categoryElement.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
}

// function updateCategoryActive() {
//     const categories = document.getElementsByClassName('category');
//     for (let i = 0; i < categories.length; i++) {
//         const category = categories[i];
//         const id = parseInt(category.getAttribute('data-id') || '0');
//         if (isCategoryActive(id)) {
//             category.classList.add('active');
//         } else {
//             category.classList.remove('active');
//         }
//     }
// }

// window.addEventListener('scroll', updateCategoryActive);

</script>

<style lang="scss"></style>
