export const currencyConverter = (
  locale: "en-US" | "en-NG",
  currency: "USD" | "NGN",
  amount: number
) => {
  const CURRENCY_FORMATTER = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  return CURRENCY_FORMATTER.format(amount);
};
