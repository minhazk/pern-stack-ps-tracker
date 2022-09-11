const CURRENT_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'GBP',
    style: 'currency',
});

const currencyFormatter = (number: number) => {
    return CURRENT_FORMATTER.format(number);
};

export { currencyFormatter };
