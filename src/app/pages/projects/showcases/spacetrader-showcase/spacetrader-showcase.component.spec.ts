import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacetraderShowcaseComponent } from './spacetrader-showcase.component';

describe('SpacetraderShowcaseComponent', () => {
  let component: SpacetraderShowcaseComponent;
  let fixture: ComponentFixture<SpacetraderShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacetraderShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacetraderShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
