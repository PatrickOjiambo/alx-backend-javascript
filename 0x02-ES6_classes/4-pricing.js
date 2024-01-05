import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing.validateAmount(amount);
    this._currency = Pricing.validateCurrency(currency);
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = Pricing.validateCurrency(value);
  }

  set amount(value) {
    this._amount = Pricing.validateAmount(value);
  }

  static validateAmount(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error('Amount should be a number');
    }
    return value;
  }

  static validateCurrency(value) {
    if (value instanceof Currency === false) {
      throw new Error('currency should be of type Currency');
    }
    return value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
