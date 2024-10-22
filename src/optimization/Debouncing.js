
// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/10/03
// Modified-Date:

export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};