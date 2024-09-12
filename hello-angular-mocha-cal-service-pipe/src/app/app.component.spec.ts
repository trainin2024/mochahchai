
import { expect } from 'chai';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
 // Adjust the import path as necessary

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).to.be.ok;
  });

  it('should have a title "Hi"', () => {
    expect(component.title).to.equal('Hi');
  });

  it('should render the title in an h1 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).to.contain('Hi');
  });
});