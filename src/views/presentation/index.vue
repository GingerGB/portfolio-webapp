<template>
    <div class="w-full h-full" style="background: #b1cdc4;">

        <section class="relative w-full lg:h-screen">
            <who />
        </section>

        <section class="relative">
            <aboutMe />
        </section>

        <section class="relative">
            <what />
        </section>

        <section class="relative">
            <points />
        </section>

        <section class="relative">
            <footers />
        </section>

    </div>
</template>
<script setup lang="ts">
import who from './sections/who.vue';
import aboutMe from './sections/aboutMe.vue';
import what from './sections/what.vue';
import points from './sections/points.vue';
import footers from './sections/footers.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
</style>
