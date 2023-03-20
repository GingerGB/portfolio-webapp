<template>
    <div class="w-full h-full">

        <section class="relative w-full h-screen">
            <who />
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
import what from './sections/what.vue';
import points from './sections/points.vue';
import footers from './sections/footers.vue';
</script>

<style scoped lang="scss">
</style>
