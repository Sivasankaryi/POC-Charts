import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PondetailsComponent } from './pondetails.component';

describe('PondetailsComponent', () => {
  let component: PondetailsComponent;
  let fixture: ComponentFixture<PondetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PondetailsComponent]
    });
    fixture = TestBed.createComponent(PondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
