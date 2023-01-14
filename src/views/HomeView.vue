<template>
    <div class="home_view">
        <div class="rate_box">
            <div class="circle">
                <img src="../assets/images/icon-star.svg" alt="star" />
            </div>
            <h1 class="title">How did we do?</h1>
            <p class="text">
                Please let us know how we did with your support request. All feedback is appreciated to help us improve
                our offering!
            </p>
            <!-- create circles with v-for -->
            <div class="circles_container">
                <div
                    class="circle number"
                    :class="{ circle_hover: selectedCircle === index }"
                    v-for="(num, index) in 5"
                    :key="index"
                    @click="handleCircleClick(index)"
                >
                    {{ num }}
                </div>
            </div>
            <button class="btn">submit</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const selectedCircle = ref(null);
const handleCircleClick = (idx) => {
    selectedCircle.value = idx;
};
</script>

<style scoped>
.home_view {
    height: 100vh;
    background-color: var(--very-dark-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Overpass', sans-serif;
}
.rate_box {
    width: 342px;
    height: 360px;
    max-width: 470px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: var(--dark-blue);
    padding: 2rem;
    border-radius: 1rem;
    overflow: auto;
}
.circle {
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.061);
}
.circle::selection {
    background-color: transparent;
}
.circle.number:hover {
    background-color: var(--orange);
    color: white;
    transition: all 0.2s ease;
    cursor: pointer;
}

.btn {
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 50px;
    background-color: var(--orange);
    color: white;
    font-weight: 700;
    font-size: 0.85rem;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1.7px;
}
.btn:active {
    transform: translateY(2px);
    box-shadow: 0px -1px 0.1rem rgba(0, 0, 0, 0.1);
}
.btn:hover {
    background-color: white;
    transition: all 0.2s ease;
    color: var(--orange);
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
.circle img {
    width: 0.9rem;
    height: 0.9rem;
}
.circles_container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
}
.circles_container div {
    color: var(--white);
    font-weight: 700;
}
.circle_hover {
    background-color: var(--medium-grey);
    color: white !important;
}
</style>
