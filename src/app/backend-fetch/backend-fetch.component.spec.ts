import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendFetchComponent } from './backend-fetch.component';

describe('BackendFetchComponent', () => {
  let component: BackendFetchComponent;
  let fixture: ComponentFixture<BackendFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
