import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiseComponent } from './visualise.component';

describe('VisualiseComponent', () => {
  let component: VisualiseComponent;
  let fixture: ComponentFixture<VisualiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
