<template>
    <div class="relative mt-40 pt-24 bg-green_giorgia-200">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <!-- TITLE -->
            <div
                class="relative tracking-widest font-serif text-green_giorgia-700 font-semibold text-5xl md:text-6xl pb-20">
                <span class="z-0 absolute text-purple_giorgia-500 font-bold about-me-title-initial"
                    style="color: #9fc1b6;">C</span>
                <span class="z-10 relative">
                    CONTACT ME
                    <span class="about-me-purple-thing"></span>
                </span>
            </div>
        </div>

        <div class="bg-green_giorgia-50 py-16 sm:py-24">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <!-- #102d24 bg-green_giorgia-800 -->
                <div
                    class="relative isolate overflow-hidden px-6 py-24 shadow-2xl sm:px-24 xl:py-32 bg-gradient-to-b from-green_giorgia-800 from-10%a to-green_giorgia-700">
                    <h2
                        class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-6xl font-serif pb-8">
                        Ti piace quello che hai visto?</h2>
                    <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">Contattami via mail o
                        WhatsApp, sono sempre disponibile ad approfondire nuove idee e progetti!</p>

                    <div class="flex w-full justify-center space-x-16 pt-20">
                        <div @click="copyPhoneNumber" ref="phoneNumberButton"
                            class="flex flex-col items-center justify-center w-52 h-52 backdrop-blur-xl bg-white/20 hover:bg-white/10 rounded-full transition-colors ease-in-out duration-150 cursor-pointer">
                            <div class="mb-3">
                                <svg class="svg-image filled text-green_giorgia-300 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                            </div>
                            <span class="text-green_giorgia-100">{{ phoneNumber }}</span>
                        </div>
                        <div @click="copyEmail" ref="emailButton"
                            class="flex flex-col items-center justify-center w-72 h-72 backdrop-blur-xl bg-white/20 hover:bg-white/10 rounded-full transition-colors ease-in-out duration-150 cursor-pointer">
                            <div class="mb-3">
                                <svg class="svg-image filled text-green_giorgia-300 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v24c0 48.6-39.4 88-88 88c-33.4 0-62.5-18.7-77.4-46.1c-20.4 28-53.4 46.1-90.6 46.1c-61.9 0-112-50.1-112-112s50.1-112 112-112c31.3 0 59.7 12.9 80 33.6V176c0-8.8 7.2-16 16-16s16 7.2 16 16v80 24c0 30.9 25.1 56 56 56s56-25.1 56-56V256C480 132.3 379.7 32 256 32zm80 224a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
                                </svg>
                            </div>
                            <span class="text-green_giorgia-100">{{ email }}</span>
                        </div>
                    </div>
                    <!-- <form class="mx-auto mt-10 flex max-w-md gap-x-4">
                        <label for="email-address" class="sr-only">Inserisci qui la tua mail</label>
                        <input id="email-address" name="email" type="email" autocomplete="email"
                            class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            placeholder="Enter your email" />
                        <button type="submit"
                            class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline
                                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notificami</button>
                    </form> -->



                    <svg viewBox="0 0 1024 1024"
                        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#giorgia_circle_gradient)" fill-opacity="0.7" />
                        <defs>
                            <radialGradient id="giorgia_circle_gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(512 512) rotate(90) scale(512)">
                                <stop stop-color="#a53b92" />
                                <stop offset="1" stop-color="#a53b92" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { useTippy } from "vue-tippy";

const phoneNumber = "+39 347 679 3629";
const phoneNumberToCopy = "3476793629";
const email = "giorgiaboscolom@gmail.com";
const notificationString = "Copiato negli appunti!";
let phoneNumberButton: Ref<HTMLInputElement | null> = ref(null);
let emailButton: Ref<HTMLInputElement | null> = ref(null);
let phoneNumberTooltip: any | null = null;
let emailTooltip: any | null = null;

onMounted(() => {
    phoneNumberTooltip = useTippy(phoneNumberButton as any, {
        content: notificationString,
    });
    emailTooltip = useTippy(emailButton as any, {
        content: notificationString,
    });
    phoneNumberTooltip.disable();
    emailTooltip.disable();
});

function copyPhoneNumber() {
    navigator.clipboard.writeText(phoneNumberToCopy);
    phoneNumberTooltip.enable();
    phoneNumberTooltip.show();
    setTimeout(() => {
        phoneNumberTooltip.hide();
        phoneNumberTooltip.disable();
    }, 2000);
}
function copyEmail() {
    navigator.clipboard.writeText(email);
    emailTooltip.enable();
    emailTooltip.show();
    setTimeout(() => {
        emailTooltip.hide();
        emailTooltip.disable();
    }, 2000);
}

</script>

<style lang="scss"></style>
