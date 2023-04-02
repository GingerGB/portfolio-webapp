<template>
    <!-- MENU -->
    <header class="absolute inset-x-0 top-0 z-50">
        <div class="mx-auto max-w-7xl">
            <div class="px-6 pt-6 pb-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">
                    <button type="button" class="-m-2.5 rounded-md p-2.5 lg:hidden" @click="mobileMenuOpen = true">
                        <span class="sr-only">Apri menu</span>
                        <Bars3Icon class="h-8 w-8 text-green_giorgia-300" aria-hidden="true" />
                    </button>
                    <div class="hidden lg:flex lg:gap-x-14">
                        <button v-for="item in navigation" :key="item.name" @click="scrollToSection(item.id)" type="button"
                            class="text-sm font-semibold leading-6 landing-top-button">{{ item.name }}</button>
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
                            <button v-for="item in navigation" :key="item.name" @click="scrollToSection(item.id)" type="button"
                                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                    item.name }}</button>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>

    <section class="relative w-full xl:h-screen" id="who">
        <who />
    </section>

    <section class="relative" id="about_me">
        <aboutMe />
    </section>

    <section class="relative" id="portfolio">
        <portfolio />
    </section>

    <section class="relative" id="contact_me">
        <contactMe />
    </section>

    <section class="relative">
        <footers />
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import who from './sections/who.vue';
import aboutMe from './sections/aboutMe.vue';
import portfolio from './sections/portfolio.vue';
import contactMe from './sections/contactMe.vue';
import footers from './sections/footers.vue';

import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
// import BrandIcon from '@/components/icons/BrandIcon.vue';
// import BrandIconNew from '@/components/icons/BrandIconNew.vue';
// import BrandIconMoon from '@/components/icons/BrandIconMoon.vue';
import BrandIconMoonNew from '@/components/icons/BrandIconMoonNew.vue';

const navigation = [
    { id: 'about_me', name: 'About me', href: '#' },
    { id: 'portfolio',  name: 'Portfolio', href: '#' },
    { id: 'contact_me',  name: 'Contattami', href: '#' },
];

const mobileMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
