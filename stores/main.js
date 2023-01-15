import { defineStore } from 'pinia';

export const useRateStore = defineStore({
    id: 'rate',
    state: () => ({
        rate: null,
        circleNumbers: 5,
    }),
    actions: {
        setRate(rate) {
            this.rate = rate;
        },
    },
});
