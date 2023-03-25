<template>
    <header>
        <div class="relative bg-bg-100">
            <div
                class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">

                <!-- HOME BUTTON -->
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <router-link :to="{name: 'home'}" class="-mt-2 md:mt-auto">
                        <span class="sr-only">{{ t("natura-franca") }}</span>
                        <span class="h-8 w-auto sm:h-10">
                            <!-- <brand-icon size="40px" /> -->
                        </span>
                    </router-link>
                </div>

                <!-- MOBILE MENU BUTTON -->
                <div class="-mr-2 -my-2 md:hidden">
                    <button @click="mobileMenuShow = true;" type="button"
                        class="bg-bg-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors"
                        aria-controls="mobile-menu" :aria-expanded="mobileMenuShow ? true : false">
                        <span class="sr-only">{{ t("open-menu") }}</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>


                <!-- PRESENTATION MENU -->
                <nav class="hidden md:flex space-x-10">
                    <router-link v-for="item in navigation" :key="item.name" :to="{name: item.route}" class="text-base font-semibold text-gray-500 hover:text-gray-900 transition-colors">
                        {{ item.name }}
                    </router-link>
                </nav>
            </div>


            <!-- MOBILE MENU -->
            <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                <div v-if="mobileMenuShow" focus
                    class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" v-on-click-outside="onClickOutside">
                    <div
                        class="rounded-lg shadow-lg ring-1 ring-bg-900 ring-opacity-5 bg-bg-100 divide-y-2 divide-gray-50">
                        <div class="pt-5 pb-6 px-5">
                            <div class="flex items-center justify-between">
                                <div>
                                    <router-link @click="mobileMenuShow = false;" :to="{name: 'home'}">
                                        <span class="sr-only">{{ t("natura-franca") }}</span>
                                        <span class="h-8 w-auto">
                                            <!-- <brand-icon size="40px" /> -->
                                        </span>
                                    </router-link>
                                </div>
                                <div class="-mr-2">
                                    <button @click="mobileMenuShow = false;" type="button"
                                        class="bg-bg-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                        <span class="sr-only">{{ t('close-menu') }}</span>
                                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="py-6 px-5">
                            <div class="grid grid-cols-2 gap-4">
                                <router-link v-for="item in navigation" :key="item.name" :to="{name: item.route}" class="text-base font-medium text-green-900 hover:text-green-700 transition-colors">
                                    {{ item.name }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

    </header>
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import { useRouter, useRoute } from "vue-router";
import { XMarkIcon, Bars3Icon} from '@heroicons/vue/24/solid';
import { vOnClickOutside } from '@vueuse/components';
import { useThemes } from '../../store';
import { useI18n } from "vue-i18n";

const emit = defineEmits(['sign-out', 'toggle-dark-mode']);

const router = useRouter();
const route = useRoute();
const themesStore = useThemes();
const { t } = useI18n();


const mobileMenuShow = ref(false);

const navigation = [
    { name: 'Chi siamo', route: 'home' },
    { name: 'Dove siamo', route: 'home' },
    { name: 'Contatti', route: 'home' },
];

const loggedAreaLabel: ComputedRef<string> = computed(() => {
    return t("buy-now");
});

function updateRouter(viewIn: string) {
    router.push({ name: viewIn });
}

const activeView: ComputedRef<string> = computed(() => {
    return route.name ? route.name.toString() : "home";
});

function onClickOutside() {
    mobileMenuShow.value = false;
}

</script>

<style scoped lang="scss">

</style>
