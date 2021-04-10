import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScrollTopComponent } from './new-scroll-top.component';

describe('NewScrollTopComponent', () => {
  let component: NewScrollTopComponent;
  let fixture: ComponentFixture<NewScrollTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewScrollTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
