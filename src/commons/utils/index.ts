function capitalizeFirstLetter(text: string = "") {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatMoney(amount: number) {
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  } catch (error) {
    return amount;
  }
}

export { capitalizeFirstLetter, formatMoney };
