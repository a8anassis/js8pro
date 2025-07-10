// Currency Formatter

const formatCurrency = amount => {
    if (!Number.isFinite(amount)) return "Invalid Amount";
    return `${amount.toFixed(2)}`
}

console.log(formatCurrency(12.3456))        // 12.34
console.log(formatCurrency(NaN))

// Safe Division
const safeDivide = (a, b) => {
    a = a ?? 0;     // nullish coalescing
    b = b ?? 1;

    return (b === 0) ? Infinity : a / b;
}

console.log(safeDivide(10, 2))
console.log(safeDivide(10, 0))
console.log(safeDivide(null, 2))

// Random Hex Color Generator
const getRandomHexColor = () => {
    const color = Math.floor(Math.random() * (0xFFFFFF + 1)).toString(16).padStart(6, '0')
    return `#${color}`
}

console.log(getRandomHexColor())
console.log(getRandomHexColor())
console.log(getRandomHexColor())
console.log(getRandomHexColor())
console.log(getRandomHexColor())

