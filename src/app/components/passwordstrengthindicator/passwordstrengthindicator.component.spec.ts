import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordstrengthindicatorComponent } from './passwordstrengthindicator.component';

describe('PasswordstrengthindicatorComponent', () => {
  let component: PasswordstrengthindicatorComponent;
  let fixture: ComponentFixture<PasswordstrengthindicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordstrengthindicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordstrengthindicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
