<template>
    <!-- <header-presentation v-if="activeView === 'home'" @toggle-dark-mode="toggleDarkMode" /> -->
</template>

<script setup lang="ts">
import headerPresentation from "./headerPresentation.vue";

import { useThemes } from '../../store';
import { useRouter, useRoute } from 'vue-router';
import { ComputedRef, computed, onMounted } from 'vue';

const router = useRouter();
const route = useRoute();
const themesStore = useThemes();

onMounted(() => {
    initDarkMode();
});

const activeView: ComputedRef<string> = computed(() => {
    return route.name ? route.name.toString() : "home";
});

function toggleDarkMode() {
    if (themesStore.darkMode) {
        themesStore.darkMode = false;
    } else {
        themesStore.darkMode = true;
    }
    localStorage.setItem("darkMode", JSON.stringify(themesStore.darkMode));
    updateDarkMode();
}
function checkDarkMode() {
    //temporarily disabled check on system preferences because it could be not desirable, let user toggle it
    //return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return false;
}
function updateDarkMode() {
    if (checkDarkMode() || themesStore.darkMode) {
        themesStore.darkMode = true;
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}
function initDarkMode() {
    //check local storage
    if (localStorage.getItem("darkMode")) {
        const cur = JSON.parse(localStorage.getItem("darkMode")!);
        themesStore.darkMode = cur;
    }
    //add listener to system preferences value
    //temporarily disabled check on system preferences because it could be not desirable, let user toggle it
    //if (!window.matchMedia) return;
    //window.matchMedia('(prefers-color-scheme: dark)').addListener(updateDarkMode);
    updateDarkMode();
}

</script>

<style scoped lang="scss">
</style>
