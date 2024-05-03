import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorshadeComponent } from './colorshade.component';

describe('ColorshadeComponent', () => {
  let component: ColorshadeComponent;
  let fixture: ComponentFixture<ColorshadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorshadeComponent]
    });
    fixture = TestBed.createComponent(ColorshadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
