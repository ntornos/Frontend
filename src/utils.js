export const numberWithCommas = (str, currency) => {
  const num = Number(str);

  if (typeof num === 'number' && currency) {
    return num.toLocaleString('en', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });
  }

  return num.toLocaleString('en', { maximumFractionDigits: 0 });
};
