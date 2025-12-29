import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoncapacityComponent } from './poncapacity.component';

describe('PoncapacityComponent', () => {
  let component: PoncapacityComponent;
  let fixture: ComponentFixture<PoncapacityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoncapacityComponent]
    });
    fixture = TestBed.createComponent(PoncapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
