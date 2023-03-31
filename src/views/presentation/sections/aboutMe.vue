<template>
    <div class="relative mt-40 pt-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <!-- TITLE -->
            <div class="relative tracking-widest font-serif text-green_giorgia-700 font-semibold text-5xl md:text-6xl">
                <span class="z-0 absolute text-purple_giorgia-500 font-bold about-me-title-initial"
                    style="color: #9fc1b6;">A</span>
                <span class="z-10 relative">
                    ABOUT ME
                    <span class="about-me-purple-thing"></span>
                </span>
            </div>
        </div>
        <div class="relative z-10 mt-20 pb-20 sm:pb-24 xl:pb-0">
            <div class="absolute inset-0 overflow-hidden bg-gradient-to-r from-green_giorgia-50 to-green_giorgia-100"></div>
            <div
                class="mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">

                <!-- IMAGE -->
                <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                    <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto landing-about-me-photo">
                        <img class="absolute inset-0 h-full w-full bg-gray-800 object-cover shadow-2xl landing-about-me-photo"
                            src="@/assets/images/about_me_red.jpg" alt="">
                    </div>
                </div>

                <div class="relative w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
                    <figure class="relative isolate pt-6 sm:pt-12">

                        <!-- QUOTE IMAGE -->
                        <svg viewBox="0 0 162 128" fill="none" aria-hidden="true"
                            class="absolute top-0 left-0 -z-10 h-32 opacity-10 fill-purple_giorgia-500">
                            <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z">
                            </path>
                            <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use>
                        </svg>

                        <!-- TEXT -->
                        <blockquote class="text-base leading-7 xl:text-lg xl:leading-8 font-light text-green_giorgia-800">
                            <p>Dopo aver frequentato i primi tre anni della magistrale a ciclo unico Ingegneria Edile - Architettura presso l’Università di Padova,
                                perseguendo i miei grandi amori per cinema e fotografia cambio rotta e mi avvicino al mondo dell’arte prima con il triennio di
                                Cinema, fotografia e televisione presso l’Accademia di Belle Arti di Bologna e poi, anche per recuperare le capacità progettuali
                                acquisite nel primo Corso di Studi, continuo con il biennio magistrale di Scenografia per il cinema e la televisione presso
                                l’Accademia di Belle Arti di Brera, in cui mi laureo a pieni voti assoluti con una tesi sull’estetica del dolore.
                                Sono una persona molto curiosa, poliedrica e dinamica, sempre pronta ad imparare cose nuove e a mettermi alla prova.
                                Metto la passione in tutto quello che faccio e mi adatto bene al lavoro in team, come ho potuto più volte sperimentare
                                durante il mio percorso accademico e le mie esperienze lavorative ed extracurriculari.
                            </p>
                        </blockquote>

                        <!-- BUTTON -->
                        <div class="mt-8 flex items-center gap-x-6">
                            <a href="#"
                                class="w-full lg:w-auto text-center lg:text-left transition-colors duration-150 ease-in-out bg-purple_giorgia-600 hover:bg-purple_giorgia-700
                                                                              px-6 py-5 lg:py-3 text-sm font-semibold text-purple_giorgia-50 shadow-sm">Scarica
                                CV</a>
                        </div>
                    </figure>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

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

// PHOTO
.landing-about-me-photo {
    object-position: 0 20%;
}

@media (min-width: 1280px) {
    .landing-about-me-photo {
        object-position: initial;
    }
}
</style>
