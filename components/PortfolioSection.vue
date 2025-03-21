<template>
    <section
        id="portfolio"
        class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
        <div class="inline-block w-full">
            <h2 class="text-4xl font-bold mb-12 text-center leading-tight">
                <span
                    class="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text"
                >
                    {{ $t("portfolio.title") }}
                </span>
            </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                v-for="(website, index) in websites"
                :key="index"
                class="group relative rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                :class="{ 'motion-safe:animate-fadeIn': true }"
            >
                <div class="relative">
                    <img
                        v-if="website.image"
                        :src="website.image"
                        :alt="website.name"
                        class="w-full h-64 object-cover hover:mix-blend-darken"
                    />
                    <div
                        v-if="!website.image"
                        class="w-full h-64 object-cover hover:mix-blend-darken bg-violet-950"
                    ></div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-violet-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <div class="absolute bottom-0 p-6 text-white">
                            <h3 class="text-xl font-bold">
                                {{ website.name }}
                            </h3>
                            <p class="mt-2">{{ website.description }}</p>
                            <a
                                :href="website.url"
                                target="_blank"
                                class="mt-4 inline-block px-4 py-2 bg-white text-violet-600 rounded-full hover:bg-violet-100 transition-colors"
                            >
                                {{ $t("portfolio.cta") }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

defineProps({
    websites: {
        type: Array,
        required: true,
    },
});
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
}

.motion-safe\:animate-fadeIn {
    @media (prefers-reduced-motion: no-preference) {
        animation: fadeIn 0.5s ease-out forwards;
    }
}
</style>
