import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenieDetailsComponent } from './genie-details.component';

describe('GenieDetailsComponent', () => {
  let component: GenieDetailsComponent;
  let fixture: ComponentFixture<GenieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenieDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
