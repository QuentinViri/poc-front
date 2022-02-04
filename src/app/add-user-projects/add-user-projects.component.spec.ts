import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserProjectsComponent } from './add-user-projects.component';

describe('AddUserProjectsComponent', () => {
  let component: AddUserProjectsComponent;
  let fixture: ComponentFixture<AddUserProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
