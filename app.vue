<template>
    <div class="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <Navbar />
        <Hero />
        <PortfolioSection :websites="websites" />
        <!-- <ContactSection /> -->
        <Footer />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
// import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";

const websites = [
    {
        name: "Dans Quel Bar Je Vais Ce Soir",
        description:
            "A web application helping you and your drinking buddy find the perfect bar for your evening.",
        image: "/images/dansquelbarjevaiscesoir.webp",
        url: "https://dansquelbarjevaiscesoir.fr",
    },
];

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
