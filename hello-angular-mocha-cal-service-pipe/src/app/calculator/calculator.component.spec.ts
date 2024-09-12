import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { assert, expect } from 'chai';

describe('CalculatorComponent', function() {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async function() {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(function() {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', function() {
    expect(component).to.be.an('object');
    expect(component).to.be.instanceOf(CalculatorComponent);
  });

  it('should add numbers correctly', function() {
    component.num1 = 5; 
    component.num2 = 3;
    component.add();
    expect(component.result).to.equal(8);
  });

  it('should handle zero values', function() {
    component.num1 = 0;
    component.num2 = 0;
    component.add();
    expect(component.result).to.equal(0);
  });

  it('should handle negative numbers', function() {
    component.num1 = -5;
    component.num2 = -3;
    component.add();
    expect(component.result).to.equal(-8);
  });it('should create', function() {
    assert.isObject(component, 'Component is an object');
    assert.instanceOf(component, CalculatorComponent, 'Component is an instance of CalculatorComponent');
  });

  it('should add numbers correctly', function() {
    component.num1 = 5;
    component.num2 = 3;
    component.add();
    assert.equal(component.result, 8, 'Result should be 8 when adding 5 and 3');
  });

  it('should handle zero values', function() {
    component.num1 = 0;
    component.num2 = 0;
    component.add();
    assert.equal(component.result, 0, 'Result should be 0 when adding 0 and 0');
  });

  it('should handle negative numbers', function() {
    component.num1 = -5;
    component.num2 = -3;
    component.add();
    assert.equal(component.result, -8, 'Result should be -8 when adding -5 and -3');
  });

  it('should have result be a number', function() {
    component.num1 = 5;
    component.num2 = 3;
    component.add();
    assert.typeOf(component.result, 'number', 'Result should be a number');
  });

  it('should not be equal to incorrect result', function() {
    component.num1 = 5;
    component.num2 = 3;
    component.add();
    assert.notEqual(component.result, 10, 'Result should not be 10');
  });

  
});