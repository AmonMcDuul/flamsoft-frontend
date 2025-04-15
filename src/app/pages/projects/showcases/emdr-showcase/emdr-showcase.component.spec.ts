import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdrShowcaseComponent } from './emdr-showcase.component';

describe('EmdrShowcaseComponent', () => {
  let component: EmdrShowcaseComponent;
  let fixture: ComponentFixture<EmdrShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmdrShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmdrShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
