export function generateOptions(options) {
    return Object.entries(options).map(([cC, cN]) => {
      return `<option value="${cC}">${cC} - ${cN}</option>`
    }).join('');
  }

  export function formatCurrency(amount, currency) {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  }