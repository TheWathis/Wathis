<template>
    <nav class="backdrop-blur-md bg-white/70 fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div
                        class="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text hover:scale-105 transition-transform cursor-pointer"
                    >
                        Wathis Corp
                    </div>
                </div>
                <div class="flex items-center space-x-6">
                    <!-- <a href="#portfolio" class="nav-link">Portfolio</a> -->
                    <!-- <a href="#contact" class="nav-link">Contact</a> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-link {
    @apply relative text-gray-700 hover:text-violet-600 transition-colors;
}

.nav-link::after {
    content: "";
    @apply absolute left-0 bottom-0 w-0 h-0.5 bg-violet-600 transition-all duration-300;
}

.nav-link:hover::after {
    @apply w-full;
}
</style>
