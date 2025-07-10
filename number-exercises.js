// Currency Formatter

const formatCurrency = amount => {
    if (!Number.isFinite(amount)) return "Invalid Amount";
    return `${amount.toFixed(2)}`
}

console.log(formatCurrency(12.3456))        // 12.34
console.log(formatCurrency(NaN))