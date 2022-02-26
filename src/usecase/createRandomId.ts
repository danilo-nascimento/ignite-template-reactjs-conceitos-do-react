export function createRandomId(min = 1, max = 10000) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min; 
}