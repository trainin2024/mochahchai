// src/test/currency-formatter.pipe.spec.ts

import { expect } from 'chai';
import { CurrencyFormatterPipe } from '../app/currency-formatter.pipe';

describe('CurrencyFormatterPipe', () => {
  let pipe: CurrencyFormatterPipe;

  beforeEach(() => {
    pipe = new CurrencyFormatterPipe();
  });

  it('should format number as USD currency by default', () => {
    const result = pipe.transform(1234.56);
    expect(result).to.equal('$1,234.56');
  });

  it('should format number as specified currency', () => {
    const result = pipe.transform(1234.56, 'EUR');
    expect(result).to.equal('€1,234.56');
  });

  it('should format number with specified locale', () => {
    const result = pipe.transform(1234.56, 'USD', 'de-DE');
    expect(result).to.equal('1.234,56 $');
  });

  it('should return empty string for NaN value', () => {
    const result = pipe.transform(NaN);
    expect(result).to.equal('');
  });
});
