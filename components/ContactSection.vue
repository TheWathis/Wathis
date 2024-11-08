<template>
    <section id="contact" class="relative">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div
                class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8"
            >
                <div class="inline-block w-full">
                    <h2
                        class="text-4xl font-bold text-center mb-8 leading-tight"
                    >
                        <span
                            class="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text"
                        >
                            Give me your ideas
                        </span>
                    </h2>
                </div>
                <div class="max-w-2xl mx-auto">
                    <form @submit.prevent="handleSubmit" class="space-y-4">
                        <div class="website-contact-form">
                            <input
                                v-model="formData.website"
                                type="text"
                                name="website"
                                autocomplete="off"
                                tabindex="-1"
                            />
                        </div>
                        <input
                            v-model="formData.email"
                            type="email"
                            placeholder="Your Email *"
                            required
                            class="contact-input"
                        />
                        <input
                            v-model="formData.name"
                            type="text"
                            placeholder="Your Name"
                            class="contact-input"
                        />
                        <textarea
                            v-model="formData.message"
                            placeholder="Your Idea *"
                            rows="4"
                            required
                            class="contact-input"
                        ></textarea>
                        <button
                            type="submit"
                            :disabled="isSubmitting || isFormDisabled"
                            class="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            {{
                                isFormDisabled
                                    ? "Message Sent"
                                    : isSubmitting
                                      ? "Sending..."
                                      : "Send Message"
                            }}
                        </button>

                        <div
                            v-if="submitStatus"
                            :class="
                                submitStatus.type === 'success'
                                    ? 'text-green-600'
                                    : 'text-red-600'
                            "
                            class="mt-4 text-center"
                        >
                            {{ submitStatus.message }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const formData = ref({
    website: "",
    name: "",
    email: "",
    message: "",
});

const isSubmitting = ref(false);
const isFormDisabled = ref(false);
const submitStatus = ref(null);

const enableFormAfterDelay = () => {
    setTimeout(() => {
        isFormDisabled.value = false;
        submitStatus.value = null;
    }, 60000); // Re-enable after 1 minute
};

const handleSubmit = async () => {
    // Prevent submission if form is disabled
    if (isFormDisabled.value) return;

    try {
        if (formData.value.website) {
            formData.value = { name: "", email: "", message: "", website: "" };
            submitStatus.value = {
                type: "success",
                message: "Message sent successfully! I'll try get back to you.",
            };
            isFormDisabled.value = true;
            return;
        }

        isSubmitting.value = true;
        submitStatus.value = null;

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData.value),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Failed to send message");
        }

        // Clear form and show success message
        formData.value = { name: "", email: "", message: "" };
        submitStatus.value = {
            type: "success",
            message: "Message sent successfully! I'll try get back to you.",
        };

        isFormDisabled.value = true;
        enableFormAfterDelay();
    } catch (error) {
        submitStatus.value = {
            type: "error",
            message:
                error.message ||
                "Failed to send message. Please try again later.",
        };
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.website-contact-form {
    display: none;
    visibility: hidden;
    position: absolute;
    left: -9999px;
}

.contact-input {
    @apply w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all;
}

.contact-info-item {
    @apply flex items-center space-x-3 text-gray-700;
}
</style>
