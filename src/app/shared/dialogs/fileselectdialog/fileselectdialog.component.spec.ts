import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileselectdialogComponent } from './fileselectdialog.component';

describe('FileselectdialogComponent', () => {
  let component: FileselectdialogComponent;
  let fixture: ComponentFixture<FileselectdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileselectdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileselectdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
