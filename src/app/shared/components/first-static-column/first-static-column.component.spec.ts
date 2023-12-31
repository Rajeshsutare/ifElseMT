import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStaticColumnComponent } from './first-static-column.component';

describe('FirstStaticColumnComponent', () => {
  let component: FirstStaticColumnComponent;
  let fixture: ComponentFixture<FirstStaticColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStaticColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStaticColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
