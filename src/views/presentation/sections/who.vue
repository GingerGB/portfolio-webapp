<template>
    <div class="relative w-full xl:h-full">
        <div class="bg-green_giorgia-800 w-full xl:h-full">

            <!-- MENU -->
            <header class="absolute inset-x-0 top-0 z-50">
                <div class="mx-auto max-w-7xl">
                    <div class="px-6 pt-6 pb-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                        <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">
                            <button type="button" class="-m-2.5 rounded-md p-2.5 lg:hidden"
                                @click="mobileMenuOpen = true">
                                <span class="sr-only">Apri menu</span>
                                <Bars3Icon class="h-8 w-8 text-green_giorgia-300" aria-hidden="true" />
                            </button>
                            <div class="hidden lg:flex lg:gap-x-14">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="text-sm font-semibold leading-6 landing-top-button">{{ item.name }}</a>
                            </div>

                        </nav>
                    </div>
                </div>

                <!-- MOBILE MENU WINDOW -->
                <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                    <div class="fixed inset-0 z-50" />
                    <DialogPanel
                        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div class="flex items-center justify-between">
                            <button type="button" class="-m-2.5 rounded-md p-2.5 text-purple_giorgia-300"
                                @click="mobileMenuOpen = false">
                                <span class="sr-only">Chiudi menu</span>
                                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="mt-6 flow-root">
                            <div class="-my-6 divide-y divide-gray-500/10">
                                <div class="space-y-2 py-6">
                                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                                        class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                            item.name }}</a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div class="relative w-full xl:h-full">
                <div class="mx-auto max-w-7xl">
                    <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl xl:h-screen">

                        <!-- DIAGONAL -->
                        <svg class="absolute inset-y-0 right-8 hidden w-80 h-full translate-x-1/2 transform lg:block fill-green_giorgia-800"
                            viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg>

                        <div class="relative px-6 py-10 sm:py-40 lg:py-56 xl:pb-0 xl:pt-24 xl:h-full lg:px-8 lg:pr-0">
                            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">

                                <!-- ICON -->
                                <div class="flex justify-center pb-16">
                                    <!-- <BrandIcon size="180px" /> -->
                                    <!-- <BrandIconNew size="220px" /> -->
                                    <!-- <div class="flex items-center justify-center rounded-full bg-green_giorgia-600"
                                        style="width: 260px; height: 260px;">
                                        <BrandIconNew size="180px"/>
                                    </div> -->
                                    <BrandIconMoonNew size="180px"/>
                                </div>

                                <!-- TITLE -->
                                <h1
                                    class="text-6xl font-bold tracking-tight text-color-1 sm:text-6xl landing-main-title relative z-10">
                                    Ciao! Sono Giorgia,<br />
                                    <span class="relative landing-purple-thing">set designer e creativa</span>
                                </h1>

                                <!-- PARAGRAPH -->
                                <p class="text-2xl md:text-xl leading-8 text-color-2 text-green_giorgia-300 font-serif font-light">
                                    Formata in scenografia, fotografia,
                                    photo e video editing, adoro apprendere nuove tecniche, per provare a dare vita agli
                                    eccentrici pensieri che abitano la mia mente.
                                    Quando non creo con l'ausilio della tecnologia, riempio pagine d'inchiostro.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- IMAGE -->
                <div class="bg-green_giorgia-100 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                        src="@/assets/images/splash_image_1.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
// import BrandIcon from '@/components/icons/BrandIcon.vue';
// import BrandIconNew from '@/components/icons/BrandIconNew.vue';
// import BrandIconMoon from '@/components/icons/BrandIconMoon.vue';
import BrandIconMoonNew from '@/components/icons/BrandIconMoonNew.vue';

const navigation = [
    { name: 'About me', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contattami', href: '#' },
]

const mobileMenuOpen = ref(false)

</script>

<style lang="scss">
.landing-main-title {
    @apply text-green_giorgia-300 font-serif;
    font-weight: 500;
    padding-bottom: 30px;
}

.landing-top-link {
    @apply transition-colors duration-150 ease-in-out;
    border: 1px solid #174434;
}

.landing-top-link:hover {
    border: 1px solid #4a7a69;
}

.landing-top-button {
    @apply transition-colors duration-150 ease-in-out text-green_giorgia-300;
}

.landing-top-button:hover {
    @apply text-green_giorgia-200;
}

.landing-purple-thing:after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 18%;
    width: 86%;
    height: 46px;
    @apply bg-purple_giorgia-700;
    z-index: -1;
}
</style>
