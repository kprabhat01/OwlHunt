import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRequisitionComponent } from './assign-requisition.component';

describe('AssignRequisitionComponent', () => {
  let component: AssignRequisitionComponent;
  let fixture: ComponentFixture<AssignRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignRequisitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
