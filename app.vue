<template>
    <div
        class="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200"
    >
        <Navbar />
        <Hero />
        <PortfolioSection :websites="localizedWebsites" />
        <ContactSection />
        <Footer />
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";

const { t } = useI18n();

const localizedWebsites = computed(() => [
    {
        name: t("portfolio.dansQuelBar.name"),
        description: t("portfolio.dansQuelBar.description"),
        image: "/images/dansquelbarjevaiscesoir.webp",
        url: "https://dansquelbarjevaiscesoir.fr",
    },
    {
        name: t("portfolio.onlyfacts.name"),
        description: t("portfolio.onlyfacts.description"),
        image: "/images/onlyfacts.webp",
        url: "https://theonlyfacts.com",
    },
]);

// Set up head
useHead({
    script: [
        {
            children: `
                (function() {
                    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                })();
            `,
            tagPriority: "critical",
        },
    ],
});

onMounted(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://umami.wathis.com/script.js";
    script.setAttribute(
        "data-website-id",
        "80dc821d-a36f-4ddd-a632-b2ad45d4ab96",
    );
    document.head.appendChild(script);
    document.title = "Wathis";
});
</script>

<style scoped></style>
