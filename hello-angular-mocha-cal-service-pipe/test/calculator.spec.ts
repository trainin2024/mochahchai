// src/test/calculator.service.spec.ts

import { expect } from 'chai';
import { CalculatorService } from '../src/app/calculator.service';


describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it('should add two numbers correctly', () => {
    const result = service.add(2, 3);
    expect(result).to.equal(5);
  });

  it('should subtract two numbers correctly', () => {
    const result = service.subtract(5, 3);
    expect(result).to.equal(2);
  });

  it('should multiply two numbers correctly', () => {
    const result = service.multiply(2, 3);
    expect(result).to.equal(6);
  });

  it('should divide two numbers correctly', () => {
    const result = service.divide(6, 3);
    expect(result).to.equal(2);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => service.divide(6, 0)).to.throw('Cannot divide by zero');
  });
});
