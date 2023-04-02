<template>
    <div class="w-full h-full bg-green_giorgia-200">

        <section class="relative w-full xl:h-screen">
            <who />
        </section>

        <section class="relative">
            <aboutMe />
        </section>

        <section class="relative bg-green_giorgia-50">
            <portfolio />
        </section>

        <section class="relative">
            <contactMe />
        </section>

        <section class="relative">
            <footers />
        </section>

    </div>
</template>
<script setup lang="ts">
import who from './sections/who.vue';
import aboutMe from './sections/aboutMe.vue';
import portfolio from './sections/portfolio.vue';
import contactMe from './sections/contactMe.vue';
import footers from './sections/footers.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');


</style>
