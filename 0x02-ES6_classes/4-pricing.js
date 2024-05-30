import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing._validateAmount(amount, 'amount');
    this._currency = Pricing._validateCurrency(currency, 'currency');
  }

  static _validateAmount(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be number`);
    }
    return value;
  }

  static _validateCurrency(value, attributeName) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attributeName} must be an instance of Currency`);
    }
    return value;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    this._amount = Pricing._validateAmount(value, 'amount');
  }

  set currency(value) {
    this._currency = Pricing._validateCurrency(value, 'currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
