import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { D3VisualizationComponent } from './d3-visualization.component';

describe('D3VisualizationComponent', () => {
  let component: D3VisualizationComponent;
  let fixture: ComponentFixture<D3VisualizationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ D3VisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3VisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
