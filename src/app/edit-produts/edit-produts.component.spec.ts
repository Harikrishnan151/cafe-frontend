import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdutsComponent } from './edit-produts.component';

describe('EditProdutsComponent', () => {
  let component: EditProdutsComponent;
  let fixture: ComponentFixture<EditProdutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProdutsComponent]
    });
    fixture = TestBed.createComponent(EditProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
