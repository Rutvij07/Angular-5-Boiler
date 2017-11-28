import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebuilderComponent } from './managebuilder.component';

describe('ManagebuilderComponent', () => {
  let component: ManagebuilderComponent;
  let fixture: ComponentFixture<ManagebuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
