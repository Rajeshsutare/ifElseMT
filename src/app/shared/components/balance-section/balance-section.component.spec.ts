import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSectionComponent } from './balance-section.component';

describe('BalanceSectionComponent', () => {
  let component: BalanceSectionComponent;
  let fixture: ComponentFixture<BalanceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
