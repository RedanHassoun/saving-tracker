export const validateAmount = (amount) => {
  if (!amount) {
    return 'Amount should have a value';
  }

  if (isNaN(amount)) {
    return 'Amount should be a number';
  }

  if (amount <= 0) {
    return 'Amount should be positive';
  }

  return null;
}
