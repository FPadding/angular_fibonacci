import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtermsListComponent } from './nterms-list.component';

describe('NtermsListComponent', () => {
  let component: NtermsListComponent;
  let fixture: ComponentFixture<NtermsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtermsListComponent]
    });
    fixture = TestBed.createComponent(NtermsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
