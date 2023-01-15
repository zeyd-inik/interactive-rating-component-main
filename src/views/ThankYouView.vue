<template>
    <div class="thank_you">
        <div class="thank_box">
            <div class="img_container">
                <img src="../assets/images/illustration-thank-you.svg" alt="thankyou" />
            </div>
            <!-- put reactive data -->
            <button class="btn">You selected {{ rateStore.rate + 1 }} out of {{ rateStore.circleNumbers }}</button>
            <h1 class="title">Thank you!</h1>
            <p class="text">
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get
                in touch!
            </p>
        </div>
    </div>
</template>

<script setup>
import { useRateStore } from '../../stores/main';
const rateStore = useRateStore();
</script>

<style scoped>
.thank_you {
    height: 100vh;
    background-color: var(--very-dark-blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Overpass', sans-serif;
}
.thank_box {
    width: 342px;
    height: 360px;
    max-width: 470px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--dark-blue);
    padding: 2rem;
    border-radius: 1rem;
    overflow: auto;
    text-align: center;
    overflow: hidden;
}

.btn {
    border: none;
    border-radius: 50px;
    background-color: #343f4c;
    color: var(--orange);
    font-weight: 400;
    font-size: 0.9rem;
    cursor: pointer;
    letter-spacing: 1.7px;
    padding: 0.7rem 1rem;
}
.img_container {
    margin-bottom: 2rem;
}
</style>
