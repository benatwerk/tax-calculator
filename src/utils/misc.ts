export const formatNumber = (number: number | undefined) => {
    if (!number) return 0;
    return number.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

export const formatNumberAsDollar = (number: number | undefined) => {
    return `$${formatNumber(number)}`;
};
