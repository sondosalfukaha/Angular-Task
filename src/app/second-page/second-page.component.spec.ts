import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './second-page.component';

describe('SecondPageComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
