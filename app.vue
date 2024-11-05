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
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
// import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";

const websites = [
    {
        name: "Dans Quel Bar Je Vais Ce Soir",
        description:
            "A web application helping Parisians find the perfect bar for their evening based on various criteria and preferences.",
        image: "/images/dansquelbarjevaiscesoir.webp",
        url: "https://dansquelbarjevaiscesoir.fr",
    },
];
</script>

<style scoped></style>
