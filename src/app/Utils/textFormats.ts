export const getExpirationDateFormat = (month: number, year: number) => {
  if (month < 10) {
    return `0${month}/${year}`;
  }
  return `${month}/${year}`;
};

export const getCardNumbersFormat = (cardNumber: number) => {
  const numbersToString = cardNumber.toString();

  return `${numbersToString.slice(0, 4)} ${numbersToString.slice(
    4,
    8,
  )} ${numbersToString.slice(8, 12)} ${numbersToString.slice(12, 16)}`;
};

export const moneyFormat = (quantity: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(quantity);
};
