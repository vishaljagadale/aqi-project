import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqiViewComponent } from './aqi-view.component';

describe('AqiViewComponent', () => {
  let component: AqiViewComponent;
  let fixture: ComponentFixture<AqiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AqiViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AqiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
