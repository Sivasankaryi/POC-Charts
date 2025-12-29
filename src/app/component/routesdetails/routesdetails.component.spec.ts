import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesdetailsComponent } from './routesdetails.component';

describe('RoutesdetailsComponent', () => {
  let component: RoutesdetailsComponent;
  let fixture: ComponentFixture<RoutesdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutesdetailsComponent]
    });
    fixture = TestBed.createComponent(RoutesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
