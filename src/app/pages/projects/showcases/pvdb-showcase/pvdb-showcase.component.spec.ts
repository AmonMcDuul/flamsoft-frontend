import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvdbShowcaseComponent } from './pvdb-showcase.component';

describe('PvdbShowcaseComponent', () => {
  let component: PvdbShowcaseComponent;
  let fixture: ComponentFixture<PvdbShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvdbShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvdbShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
