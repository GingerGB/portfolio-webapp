<template>
    <div class="bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="max-w-max mx-auto">
            <main class="sm:flex">
                <p class="text-4xl font-extrabold text-green-600 sm:text-5xl">401</p>
                <div class="sm:ml-6">
                    <div class="sm:border-l sm:border-border sm:pl-6">
                        <h1 class="text-4xl font-extrabold text-gray-600 tracking-tight sm:text-5xl">{{$t("unauthorized")}}</h1>
                        <p class="mt-1 text-base font-semibold text-gray-400">
                            {{$t("unauthorized-info")}}
                        </p>
                    </div>
                    <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                        <button
                            type="button"
                            @click="updateRouter('home')"
                            class="
                                inline-flex
                                items-center
                                px-4
                                py-2
                                border border-transparent
                                text-sm
                                font-medium
                                rounded-md
                                shadow-sm
                                text-white
                                bg-green-600
                                hover:bg-green-700
                                focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                            "
                        >
                            {{$t("go-back-home")}}
                        </button>
                        <!-- <button
                            type="button"
                            @click="updateRouter('support')"
                            class="
                                inline-flex
                                items-center
                                px-4
                                py-2
                                border border-transparent
                                text-sm
                                font-medium
                                rounded-md
                                text-green-700
                                bg-green-100
                                hover:bg-green-200
                                focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                            "
                        >
                            {{$t("contact-support")}}
                        </button> -->
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function updateRouter(viewIn: string) {
    router.push({ name: viewIn });
}

</script>

<style scoped lang="scss">

</style>
