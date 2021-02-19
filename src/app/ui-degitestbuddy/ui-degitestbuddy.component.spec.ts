import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDegitestbuddyComponent } from './ui-degitestbuddy.component';

describe('UiDegitestbuddyComponent', () => {
  let component: UiDegitestbuddyComponent;
  let fixture: ComponentFixture<UiDegitestbuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDegitestbuddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDegitestbuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
