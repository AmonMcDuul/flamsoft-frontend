import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchShowcaseComponent } from './sketch-showcase.component';

describe('SketchShowcaseComponent', () => {
  let component: SketchShowcaseComponent;
  let fixture: ComponentFixture<SketchShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SketchShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SketchShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
