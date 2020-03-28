import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupmodalokonlyComponent } from './popupmodalokonly.component';

describe('PopupmodalokonlyComponent', () => {
  let component: PopupmodalokonlyComponent;
  let fixture: ComponentFixture<PopupmodalokonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupmodalokonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupmodalokonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
