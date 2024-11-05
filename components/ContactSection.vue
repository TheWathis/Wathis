<template>
    <section id="contact" class="relative">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                <div class="inline-block w-full">
                    <h2
                        class="text-4xl font-bold text-center mb-8 leading-tight"
                    >
                        <span
                            class="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text"
                        >
                            Let's Create Together
                        </span>
                    </h2>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div class="contact-info-item">
                            <i class="fas fa-envelope text-violet-600"></i>
                            <span>hello@wathis.com</span>
                        </div>
                        <div class="contact-info-item">
                            <i class="fas fa-phone text-violet-600"></i>
                            <span>(555) 123-4567</span>
                        </div>
                        <div class="contact-info-item">
                            <i
                                class="fas fa-map-marker-alt text-violet-600"
                            ></i>
                            <span>123 Creative Ave, Digital City</span>
                        </div>
                    </div>
                    <form class="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            class="contact-input"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            class="contact-input"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            class="contact-input"
                        ></textarea>
                        <button
                            class="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-input {
    @apply w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all;
}

.contact-info-item {
    @apply flex items-center space-x-3 text-gray-700;
}
</style>
