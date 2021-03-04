import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAccordiansComponent } from './mat-accordians.component';

describe('MatAccordiansComponent', () => {
  let component: MatAccordiansComponent;
  let fixture: ComponentFixture<MatAccordiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatAccordiansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAccordiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
