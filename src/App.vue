<script setup></script>

<template>
    <div class="app">
        <router-view v-slot="{ Component }">
            <transition name="slide">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style>
.app {
    height: 100vh;
    background-color: var(--very-dark-blue);
    overflow: hidden;
}
.slide-enter-active,
.slide-leave-active {
    transition: all 0.6s ease;
}
.slide-enter-from {
    opacity: 0;
    transform: scale(0.4);
}
.slide-leave-to {
    opacity: 0;
    transform: scale(0.4);
}

.title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin: 1rem 0;
}
.text {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--white);
    line-height: 1.5;
    transform: translateY(-20px);
    margin-top: 1rem;
}
</style>
``
