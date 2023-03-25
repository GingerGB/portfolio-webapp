<template>
    <div class="relative w-full h-full">
        <div class="bg-landing-container w-full h-full">
            <header class="absolute inset-x-0 top-0 z-50">
                <div class="mx-auto max-w-7xl">
                    <div class="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                        <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">
                            <a href="#" class="-m-1.5 p-1.5">
                                <span class="sr-only">Your Company</span>
                                <img alt="Your Company" class="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=200" />
                            </a>
                            <button type="button" class="-m-2.5 rounded-md p-2.5 text-color-1 lg:hidden"
                                @click="mobileMenuOpen = true">
                                <span class="sr-only">Open main menu</span>
                                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                            </button>
                            <div class="hidden lg:ml-12 lg:flex lg:gap-x-14">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="text-sm font-semibold leading-6 landing-top-button">{{ item.name }}</a>
                            </div>
                        </nav>
                    </div>
                </div>
                <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                    <div class="fixed inset-0 z-50" />
                    <DialogPanel
                        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div class="flex items-center justify-between">
                            <a href="#" class="-m-1.5 p-1.5">
                                <span class="sr-only">Your Company</span>
                                <img class="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </a>
                            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"
                                @click="mobileMenuOpen = false">
                                <span class="sr-only">Close menu</span>
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
                                <div class="py-6">
                                    <a href="#"
                                        class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                        in</a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div class="relative w-full h-full">
                <div class="mx-auto max-w-7xl">
<<<<<<< HEAD
                    <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl lg:h-screen">


                        <!-- style="filter: drop-shadow(3px 5px 2px rgb(9 19 20 / 0.4));" -->
                        <svg class="landing-diagonal-section absolute inset-y-0 right-8 hidden w-80 lg:h-full translate-x-1/2 transform lg:block"
                            viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg>
                        <div class="relative px-6 pt-24 lg:h-full lg:px-8 lg:pr-0">
                            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <!-- <div class="hidden sm:mb-10 sm:flex">
=======
                    <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <svg class="landing-diagonal-section absolute inset-y-0 right-8 hidden h-screen w-80 translate-x-1/2 transform lg:block"
                            viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg>

                        <div class="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
                            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <div class="hidden sm:mb-10 sm:flex">
>>>>>>> ff0feb973d85e3e60524c9e9c4da834d49fab3d3
                                    <div
                                        class="landing-top-link relative rounded-full py-1 px-3 text-sm leading-6 text-color-2">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. <a href="#"
                                            class="whitespace-nowrap font-semibold text-color-1"><span
                                                class="absolute inset-0" aria-hidden="true" />Read more <span
                                                aria-hidden="true">&rarr;</span></a>
                                    </div>
<<<<<<< HEAD
                                </div> -->

                                <div class="flex justify-center pb-16">
                                    <!-- <BrandIcon size="280px" /> -->
                                    <BrandIconNew size="280px" />
                                    <!-- <div class="flex items-center justify-center rounded-full"
                                        style="width: 280px; height: 280px; background-color: #1a373a;">
                                        <BrandIconNew size="200px"/>
                                    </div> -->
                                </div>

                                <h1
                                    class="text-3xl font-bold tracking-tight text-color-1 sm:text-6xl leading-6 landing-main-title">
                                    Hi, I'm Giorgia,<br />visual designer</h1>
                                <p class="mt-2 leading-8 text-color-2 landing-side-title">As an
                                    artist trained in set design, photography and photo editing I combine these mediums to
                                    create
                                    unique and visually striking artworks. <br> When not creating, I enjoy hiking and
                                    exploring new landscapes.</p>
                                <!-- <div class="mt-6 flex items-center gap-x-6">
=======
                                </div>
                                <h1 class="text-4xl font-bold tracking-tight text-color-1 sm:text-6xl leading-6 landing-main-title">
                                    Hi, I'm Giorgia<br />from Sottomarina</h1>
                                <p class="mt-6 text-lg leading-8 text-color-2">Anim aute id magna aliqua ad ad non
                                    deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                                    occaecat fugiat aliqua.</p>
                                <div class="mt-10 flex items-center gap-x-6">
>>>>>>> ff0feb973d85e3e60524c9e9c4da834d49fab3d3
                                    <a href="#"
                                        class="landing-main-button rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                                        started</a>
                                    <a href="#" class="text-sm font-semibold leading-6 text-color-1">Learn more <span
                                            aria-hidden="true">→</span></a>
<<<<<<< HEAD
                                </div> -->
=======
                                </div>
>>>>>>> ff0feb973d85e3e60524c9e9c4da834d49fab3d3
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                        src="@/assets/images/splash_image_1.jpg" />
                    <!-- <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                        alt="" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
<<<<<<< HEAD
import BrandIcon from '@/components/icons/BrandIcon.vue';
import BrandIconNew from '@/components/icons/BrandIconNew.vue';
=======
>>>>>>> ff0feb973d85e3e60524c9e9c4da834d49fab3d3

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Log in', href: '#' },
]

const mobileMenuOpen = ref(false)

</script>

<<<<<<< HEAD
<style lang="scss">
=======
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
>>>>>>> ff0feb973d85e3e60524c9e9c4da834d49fab3d3

// #0b2224 #091314
$landing-main-color: #091314;

<<<<<<< HEAD

.landing-main-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: 80px;
    padding-bottom: 30px;
    line-height: 5.2rem;
}

.landing-side-title {
    // @apply font-light uppercase tracking-widest;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 20px;
=======
.landing-main-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 90px;
    padding-bottom: 30px;
    line-height: 5.8rem;
>>>>>>> ff0feb973d85e3e60524c9e9c4da834d49fab3d3
}

.text-color-1 {
    color: #b1cdc4;
}

.text-color-2 {
    color: #b1cdc4;
}

.bg-landing-container {
    background: $landing-main-color;
}

.landing-diagonal-section {
    fill: $landing-main-color;
}

.landing-main-button {
    @apply transition-colors duration-150 ease-in-out;
    background: #c1f1dd;
    color: #173b2f;
}

.landing-main-button:hover {
    background: #defcf0;
}

.landing-top-link {
    @apply transition-colors duration-150 ease-in-out;
    border: 1px solid #174434;
}

.landing-top-link:hover {
    border: 1px solid #4a7a69;
}

.landing-top-button {
    @apply transition-colors duration-150 ease-in-out;
    color: #b1cdc4;
}

.landing-top-button:hover {
    color: #dbe9e4;
}
</style>
