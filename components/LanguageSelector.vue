<template>
    <select
        v-model="locale"
        class="bg-transparent px-2 py-1 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 cursor-pointer"
    >
        <option value="en">English</option>
        <option value="fr">Français</option>
    </select>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped>
select option {
    @apply bg-white dark:bg-gray-800;
}
</style>
