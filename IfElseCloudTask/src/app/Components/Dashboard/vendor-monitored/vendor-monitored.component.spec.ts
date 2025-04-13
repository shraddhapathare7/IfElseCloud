import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMonitoredComponent } from './vendor-monitored.component';

describe('VendorMonitoredComponent', () => {
  let component: VendorMonitoredComponent;
  let fixture: ComponentFixture<VendorMonitoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorMonitoredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorMonitoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
