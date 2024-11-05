<template>
    <header class="pt-24 pb-16 relative overflow-hidden">
        <div
            class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
            <div class="inline-block">
                <h1 class="text-6xl md:text-7xl font-bold mb-8 animate-fade-in">
                    <span
                        class="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text"
                    >
                        I Create Digital Magic
                    </span>
                </h1>
            </div>
            <p class="text-2xl text-gray-700 animate-slide-up">
                Turning <del>your</del> <b>my</b> ideas into stunning digital
                experiences
            </p>
            <div class="mt-8">
                <a
                    href="#portfolio"
                    class="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                >
                    See My Work
                </a>
            </div>
        </div>
        <div
            class="absolute inset-0 bg-gradient-to-r from-violet-200/30 to-fuchsia-200/30 animate-pulse"
        ></div>
    </header>
</template>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slide-up {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-slide-up {
    animation: slide-up 1s ease-out;
}
</style>
