import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeListComponent } from './prime-list.component';

describe('PrimeListComponent', () => {
  let component: PrimeListComponent;
  let fixture: ComponentFixture<PrimeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeListComponent]
    });
    fixture = TestBed.createComponent(PrimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
