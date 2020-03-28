import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupmodalyesnoComponent } from './popupmodalyesno.component';

describe('PopupmodalyesnoComponent', () => {
  let component: PopupmodalyesnoComponent;
  let fixture: ComponentFixture<PopupmodalyesnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupmodalyesnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupmodalyesnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
