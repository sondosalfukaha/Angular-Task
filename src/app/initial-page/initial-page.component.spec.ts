import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPageComponent } from './initial-page.component';

describe('InitialPageComponent', () => {
  let component: InitialPageComponent;
  let fixture: ComponentFixture<InitialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
