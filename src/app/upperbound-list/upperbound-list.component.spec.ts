import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperboundListComponent } from './upperbound-list.component';

describe('UpperboundListComponent', () => {
  let component: UpperboundListComponent;
  let fixture: ComponentFixture<UpperboundListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperboundListComponent]
    });
    fixture = TestBed.createComponent(UpperboundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
