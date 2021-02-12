import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectdropDownComponent } from './mat-selectdrop-down.component';

describe('MatSelectdropDownComponent', () => {
  let component: MatSelectdropDownComponent;
  let fixture: ComponentFixture<MatSelectdropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSelectdropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectdropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
